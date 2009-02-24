//When the servlet is first visited the 'outer shell'
//is loaded.  You can load additional resources here.
try{
    print("Loading shell");

    load('index.jsx');
    
    print("Loaded shell.");
}catch(e){
    print(e.toString());
}


//You'll need to provide a request dispatcher
//to map the request to the partular javascript
//you'ld like to call

//In this simple example, we've already preloaded
//index.jsx above and simply
var dispatch_jsx = function(request, response){
    
    print("Dispatching request");
    
    var index = new IndexServlet();
    return index.html(request, response);
    
    print("Finished Dispatching request");
    
    return response
    
};