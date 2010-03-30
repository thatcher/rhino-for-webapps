//You'll need to provide a request dispatcher
//to map the request to the partular javascript
//you'ld like to call
var dispatch = function(request, response){
    try{
        switch(request.requestURI){
            case "/home/":
                site.home(request, response);
                break;
            case "/examples/":
                site.examples(request, response);
                break;
            default:
                site._404(request, response);
        }
    }catch(e){
        print('error loading page '+request.requestURI + "\n"+ e);
        var sw = new java.io.StringWriter(),
            pw = new java.io.PrintWriter(sw);
        if(e.rhinoException){
            e.rhinoException.printStackTrace(pw);
        }else if(e.javaException){
            e.javaException.printStackTrace(pw);
        }
        site._500(request, response, sw+'');
    }
};
