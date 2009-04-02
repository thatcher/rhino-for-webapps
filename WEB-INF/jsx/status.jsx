
var _this = this;

var StatusServlet = function(){};

StatusServlet.prototype.html = function(request, response){
    print("Handling request servlet");
    var detail = function(obj,name){
        var list = <></>,prop;
        for(prop in obj){
                list += <li>{prop + ": " + obj[prop]}</li>;
        }
        return list.length()>0 ? 
			list : 
			list += <li>No {name} Properties Details</li>;
    }; 
    response.body = <html>
        <head>
            <title>Claypool Server</title>
        </head>
        <body>
            <div>
                <h1>Claypool Server Status</h1>
                <p>The current time is : {new Date()}</p>
                <div id="globalDetails">
                    <h2>Application Global Details</h2>
                    <ul>{detail(_this, "Global")}</ul>
                </div>
                <div id="locationDetails">
                    <h2>Application Location Details</h2>
                    <ul>{detail(_this.location, "Location")}</ul>
                </div>
                <div id="navigatorDetails">
                    <h2>Application Navigator Details</h2>
                    <ul>{detail(_this.navigator, "Navigator")}</ul>
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
