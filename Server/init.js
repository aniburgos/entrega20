const API_URL = "http://localhost:3001/entrega20/";

async function requestCRUD(method, data) {
    let result;
    try {
        switch (method) {
            case 'POST':
                let postResponse = await fetch(API_URL, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                result = postResponse.ok ? await postResponse.json() : false;
                break;

            default:
                result = false;
                break;
        }
    } catch (error) {
        console.error("Error:", error);
        result = false;
    }

    return result;
}

function postDatos(data) {
    requestCRUD('POST', data).then((response) => response);
}
