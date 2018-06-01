import authConfig from "./authConfig";
import { addSeconds, parse } from "date-fns"
import request, { MSGraphProfile } from "./graphRequest";
import * as qs from "querystring";

export const verifyToken = async function(access_token:string) : Promise<MSGraphProfile> {
    try {
        let profile = await request("https://graph.microsoft.com/v1.0/me", access_token)
        return (profile as MSGraphProfile) || null;
    
    } catch (err) {
        console.log("ERROR gettting profile");
        return null;
    }
}

export var ensureLogin = async function() {
    var qsToken = getTokenFromUrl();

    if (qsToken) {

        // let profile = await verifyToken(qsToken);
        qsToken.profile = await verifyToken(qsToken.access_token);
        if (!qsToken.profile) throw new Error("Something fishy is happening. Invalid Token in QueryString!!!");


        cacheToken(qsToken);
        return qsToken
    }
    var cachedToken = getTokenFromCache();
    if (cachedToken) {
        return cachedToken;
    }
    redirectToLogin();
}

var redirectToLogin = function() {
    var redirect = encodeURI(window.location.protocol + "//" + window.location.host);
    var url = `${authConfig.authEndpoint}?${qs.stringify(authConfig.params)}&redirect_uri=${redirect}`;
    window.location.href = url;
}

var getTokenFromUrl = function() : AuthProps {
    let { access_token, expires_in} = qs.parse(window.location.hash.substr(1));
    return access_token && expires_in 
        ? { 
            profile: null, 
            access_token: (access_token as string), 
            expires: addSeconds(new Date(), parseInt(expires_in as string,10) - 120) 
        } 
        : null;
}

export const getTokenFromCache = function() : AuthProps {
    try {
        var token = JSON.parse(localStorage.getItem(authConfig.cacheKey));
        if (parse(token.expires) > new Date()) {
            return token;
        }
        return null;

    } catch(e) { 
        return null
    }
}

var cacheToken = function(token:AuthProps) {
    localStorage.setItem(authConfig.cacheKey, JSON.stringify(token));
}

export interface AuthProps {
    access_token: string,
    expires: Date,
    profile?: MSGraphProfile,
}

