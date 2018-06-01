const CLIENT_ID = "d45e3525-25e2-45d4-b662-ec9d097615bf";
const TENANT = "skylinetechnologies.com";

const GRAPH_URL = "https://graph.microsoft.com";

export default {
    cacheKey: "droopy-static App Token v2",
    authEndpoint: `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/authorize`,
    params: {
        client_id: CLIENT_ID,
        response_type: "id_token token",
        // redirect_url will be set to window.location
        scope: `openid ${GRAPH_URL}/user.read`,
        nonce: "1234",
        state: "5678",
    }
}
