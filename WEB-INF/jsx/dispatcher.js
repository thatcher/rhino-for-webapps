
//You'll need to provide a request dispatcher
//to map the request to the partular javascript
//you'ld like to call

//In this simple example, we've already preloaded
//index.jsx above and simply
var dispatch_jsx = function(request, response){
    
    print("\n\t<-@Dispatching requestfor core examples@->\n");
    
    if(request.parameters.request){
        return new RequestServlet().html(request, response)
    }else if(request.parameters.status){
        return new StatusServlet().html(request, response)
    }else{
        return new IndexServlet().html(request, response);
    }
    
    print("Finished Dispatching request");
    
    return response
    
};