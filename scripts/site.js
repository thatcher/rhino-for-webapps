var site = {

    home: function(request, response){
        var m = {
            page: 'home',
            title: 'Rhino For Webapps',
            request: request,
            response: response,
            context: request.contextPath
        }
        //Uses E4x if you not familiar check it out.  Much cleaner than trying
        //to quote a big string plus I've hardly touched the surface of whats possible
        //Let me know if you do some creative stuff with it!
        response.body = templates.render(m);
        
        response.headers = {
            status : 200,
            "Content-Type" : "text/html"
        };
        
    },
    examples: function(request, response){
        var m = {
            page: 'examples',
            title: 'Rhino For Webapps - Examples',
            context: request.contextPath
        }
        //Uses E4x if you not familiar check it out.  Much cleaner than trying
        //to quote a big string plus I've hardly touched the surface of whats possible
        //Let me know if you do some creative stuff with it!
        response.body = templates.render(m);
        
        response.headers = {
            status : 200,
            "Content-Type" : "text/html"
        };
        
    },
    _404: function(request, response){
         var m = {
            error: '_404',
            title: 'Rhino For Webapps - Requested Resource Not Found',
            request: request,
            response: response,
            context: request.contextPath
        }
        response.body =  templates.base(m).toXMLString();
        response.headers = {
            status : 404,
            "Content-Type" : "text/html"
        };
        
    }, 
    _500: function(request, response, stackTrace){
         var m = {
            error: '_500',
            stackTrace: stackTrace,
            title: 'Rhino For Webapps - Bork!',
            request: request,
            response: response,
            context: request.contextPath
        }
        response.body =  templates.base(m).toXMLString();
        response.headers = {
            status : 500,
            "Content-Type" : "text/html"
        };
        
    }
}
