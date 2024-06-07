exports.on_backend_call = function (ctx) {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(json => {
      return {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body_json: json
      }
    })
};