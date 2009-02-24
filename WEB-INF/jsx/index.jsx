print("Defining IndexServlet");

var IndexServlet = function(){};

IndexServlet.prototype.html = function(request, response){
    print("Handling index.html");
    
    response.body = 
    <html>
        <head></head>
        <body>
            Hello World!
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