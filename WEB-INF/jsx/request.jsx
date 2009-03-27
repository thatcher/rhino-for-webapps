

var RequestServlet = function(){};

RequestServlet.prototype.html = function(request, response){
    print("Handling request servlet");
    var detail = function (obj,name){
        var list = <></>,prop;
        for(prop in obj){
          list+=<li>{prop + ": " + obj[prop]}</li>;
        }
        return list.length()>0?list:list+=<li>No Request {name}</li>;
    };
    response.body = <html>
        <head>
            <title>Rhino 4 Web: Request Details</title>
        </head>
        <body>
            <div>
                <h1>Request Details</h1>
                <p>The current time is : {new Date()}</p>
                <div id="requestDetails">
                    <h2>Request URL details</h2>
                    <ul>{detail(request, "Details")}</ul>
                </div>
                <div id="requestParams">
                    <h2>Request Parameters</h2>
                    <ul>{detail(request.parameters, "Parameters")}</ul>
                </div>
                <div id="requestHeaders">
                    <h2>Request Headers</h2>
                    <ul>{detail(request.headers, "Headers")}</ul>
                </div>
                <div id="requestLocales">
                    <h2>Prefered Locales</h2>
                    <ul>{detail(request.locales, "Locales")}</ul>
                </div>
                <div id="requestAttributes">
                    <h2>Request Attributes</h2>
                    <ul>{detail(request.attributes, "Attributes")}</ul>
                </div>
            </div>
        </body> 
    </html>.toXMLString();
    
    response.headers = {
        status : 200,
        "Content-Type" : "text/html"
    };
    
    print("Finished Handling request");
    return response;
};
