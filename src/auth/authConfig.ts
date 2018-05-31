const GRAPH_URL = "https://graph.microsoft.com";
const TENANT_ID = "59a2b115-db55-4735-a4d0-96c18208604f";
const CLIENT_ID = "d45e3525-25e2-45d4-b662-ec9d097615bf";
export default {
    cacheKey: "droopy-static App Token v2",
    authEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
    params: {
        client_id: CLIENT_ID,
        response_type: "id_token token",
        // redirect_url will be set to window.location
        scope: `openid ${GRAPH_URL}/user.read`,
        // scope: `openid profile`,
        nonce: "1234",
        state: "5678",
    }
}
//https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=6857371d-6fea-4bba-89a6-4a78ac3e57bc&response_type=id_token token&redirect_uri=http://localhost:3000&scope=openid https://graph.microsoft.com/user.read https://graph.microsoft.com/sites.readwrite.all&response_mode=fragment&state=12345&nonce=45667
