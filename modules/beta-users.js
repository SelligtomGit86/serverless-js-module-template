exports.on_backend_call = function (ctx) {
  if (ctx.request.apikey.metadata.includes("beta-tester") && ctx.request.apikey.metadata["beta-tester"]) {
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body_json: { requestedBy: ctx.request.apikey }
    }
  } else {
    return {
      status: 429,
      headers: {
        'Content-Type': 'application/json'
      },
      body_json: { warning: "You are not registered for our beta ! Please register here : ................." }
    }
  }
};