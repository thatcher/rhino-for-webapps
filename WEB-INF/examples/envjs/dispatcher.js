//In this simple example, we've already preloaded
//env.rhino.js

var context_path = "";
var dispatch_envjs = function(request, response){
    
    context_path = 
        request.attributes['javax.servlet.forward.context_path']||
        'rhino-for-webapps';
        
    print("\n\t<-@Dispatching request for envjs example@->\n");  
    
    if(request.parameters.request){
        window.request = request; 
        window.location = context_path+'/WEB-INF/examples/envjs/request.html';
        response.body = window.document.innerHTML;
    }else if(request.parameters.status){ 
        window.location = context_path+'/WEB-INF/examples/envjs/status.html';  
        response.body = window.document.innerHTML;
    }else{
        window.location = context_path+'/WEB-INF/examples/envjs/index.html';
        response.body = window.document.innerHTML;
    }
    
    response.headers = {  
        status : 200,
        "Content-Type" : "text/html"
    };
    
    print("Finished Dispatching request");
    
    return response
    
};