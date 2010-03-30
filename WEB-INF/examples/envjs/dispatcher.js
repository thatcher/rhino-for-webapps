//In this simple example, we've already preloaded
//env.rhino.js

var url = "";
var dispatch = function(request, response){
    
    url = 'http://'+request.serverName;
    if(request.serverPort)
        url += ':'+request.serverPort;
    url += '/html/envjs.html';
        
    print("Dispatching request for envjs example" + url);  
    
    window.location = url;  
    response.body = window.document.innerHTML;
    
    response.headers = {  
        status : 200,
        "Content-Type" : "text/html"
    };
    
    print("Finished Dispatching request");
    
    return response
    
};