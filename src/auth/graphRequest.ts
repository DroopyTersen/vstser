export default function(url, token, options?) {
    return fetch(url, {...{
        // credentials: 'include',
        headers: {
            'authorization': "Bearer " + token,
            "content-type": "application/json",
        },
        method: 'GET',
        // mode: 'cors',
        redirect: 'follow'
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