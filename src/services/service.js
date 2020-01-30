export const get = (uri, func) => {
    fetch(uri, {
        method: 'GET'
    }).then(func);
}