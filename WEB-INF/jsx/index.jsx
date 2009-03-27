print("Defining IndexServlet");

var IndexServlet = function(){};

IndexServlet.prototype.html = function(request, response){
    print("Handling index.html");
    
    //Uses E4x if you not familiar check it out.  Much cleaner than trying
    //to quote a big string plus I've hardly touched the surface of whats possible
    //Let me know if you do some creative stuff with it!
    response.body =  <html>
        <head>
            <title>Rhino 4 Web</title>
        </head>
        <body>
            <h1>Hello World!</h1><hr/>
            <h2>Examples (this page is one!)</h2><hr/>
            <h3>Basics</h3>
            <ul>
                <li>
                    <a href={request.attributes['javax.servlet.forward.context_path']
                                +'/?request=true'} >
                        Details of the request object
                    </a>
                </li>
                <li>
                    <a href={request.attributes['javax.servlet.forward.context_path']
                                +'/?status=true'} >
                        Details of the global object scope
                    </a>
                </li>
            </ul>
            <hr/>
            <h3>More examples</h3>
            <ul>
                <li>
                    <a href={request.attributes['javax.servlet.forward.context_path'] 
                            +"/examples/envjs/"}>
                        Using Envjs to Simulate Client-Side Javascript
                    </a>
                </li>
            </ul>
            <hr/>
        </body>
    </html>.toXMLString();
    
    response.headers = {
        status : 200,
        "Content-Type" : "text/html"
    };
    
    print("Finished Handling index.html");
    return response;
};

print("Finished Defining IndexServlet");