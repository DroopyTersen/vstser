import authConfig from "./authConfig";
import { addSeconds, parse } from "date-fns"
import request from "./graphRequest";
import * as qs from "querystring";



export const verifyToken = async function(token) {
    console.log(token);
    try {
        let profile = await request("https://graph.microsoft.com/v1.0/me", token.access_token)
        console.log("CURRENT USER:", profile);
        return profile ? true : false;
    
    } catch (err) {
        console.log("ERROR gettting profile");
        return false;
    }

}

export var ensureLogin = async function() {
    var qsToken = getTokenFromUrl();

    if (qsToken) {

        let isValidToken = await verifyToken(qsToken);
        if (!isValidToken) throw new Error("Something fishy is happening. Invalid Token in QueryString!!!");
        
        cacheToken(qsToken);
        return qsToken
    }
    var cachedToken = getTokenFromCache();
    if (cachedToken) {
         let isValidToken = await verifyToken(cachedToken);
         return isValidToken ? cachedToken : redirectToLogin();
    }
    redirectToLogin();
}

var redirectToLogin = function() {
    var redirect = encodeURI(window.location.protocol + "//" + window.location.host);
    var url = `${authConfig.authEndpoint}?${qs.stringify(authConfig.params)}&redirect_uri=${redirect}`;
    window.location.href = url;
}

var getTokenFromUrl = function() {
    let { access_token, expires_in} = qs.parse(window.location.hash.substr(1));
    return access_token && expires_in ? { access_token, expires: addSeconds(new Date(), parseInt(expires_in as string,10) - 120) } : null;
}

var getTokenFromCache = function() {
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

var cacheToken = function(token) {
    localStorage.setItem(authConfig.cacheKey, JSON.stringify(token));
}


