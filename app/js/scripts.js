// to serve JSON, nav to root folder in Terminal and type "npm run serve"

// getJSON call
$.getJSON("api/sample.json")
.done(function(data) {
  console.log(data);
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
