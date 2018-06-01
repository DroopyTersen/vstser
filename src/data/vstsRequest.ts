const TOKEN = "3caqxwtvgvqnwwmhdcor2mnpwpbiskinb3zworry2zz672dibe7q";
const BASE_URL = "https://skyline.visualstudio.com/_apis"

export default function(path, options?) {
    return fetch(BASE_URL + path, {...{
        headers: {
            'authorization': `Basic ${btoa(":" + TOKEN)}`,
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
        .catch(error => console.error("Error: ", error))
}