exports.on_backend_call = function (ctx) {
  if (ctx.apikey.metadata.includes("beta-tester") && ctx.apikey.metadata["beta-tester"]) {
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body_json: { requestedBy: ctx.apikey }
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