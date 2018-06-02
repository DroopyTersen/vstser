// const TOKEN = "3caqxwtvgvqnwwmhdcor2mnpwpbiskinb3zworry2zz672dibe7q";
// const BASE_URL = "https://skyline.visualstudio.com/_apis"
import hub from "../hub"


export default function(path, options?) {
    let { account, personalToken } = hub.state.settings;
    if (!account || !personalToken) {
        hub.trigger("settings:error")
        return Promise.reject("Invalid Settings");
    }
    let url = `https://${account}.visualstudio.com/_apis${path}`;
    return fetch(url, {...{
        headers: {
            'authorization': `Basic ${btoa(":" + personalToken)}`,
            "accept": "application/json"
        },
        method: 'GET',
    }, ...options })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.error("fetch error: " + response.status);
            }
        })
        .catch(error => hub.trigger("settings:error"))
}