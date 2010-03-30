/**
 * @author thatcher
 */
templates.pages.home = {

    render : function(m){
        return <>
            <div id="welcome" class='span-23'> 
                { home.welcome() }
            </div>
            <div id="running" class='span-23'> 
                { home.running() }
            </div>
            <div id="response" class='span-23'> 
                { home.response(m) }
            </div>
            <div id="request" class='span-23'> 
                { home.request(m) }
            </div>
            <div id="dispatch" class='span-23'> 
                { home.dispatch(m) }
            </div>
            <div id="shell" class='span-23'> 
                { home.shell(m) }
            </div>
            <div id="servletMapping" class='span-23'> 
                { home.servletMapping(m) }
            </div>
            <div id="servlet" class='span-23'> 
                { home.servlet(m) }
            </div>
            <div id="root" class='span-23'> 
                { home.root(m) }
            </div>
            <div id='examples'>
                <h2>More examples</h2>
                <ul>
                    <li>
                        <a href={m.context+"/examples/"}>
                            explore more examples
                        </a>
                    </li>
                </ul>
            </div>
        </>;
    }
};

var home = {
    welcome: function(){
        return <>
            <h3>welcome</h3>
            <p>
    Rhino-for-webapps is a simple bridge technology for enabling development of
    webapps with javascript in proven containers like Jetty, Tomcat, and of course
    Google AppEngine.  It provides as little as possible and is not itself an
    application framework,  only the lowest common denominator.  
            </p>
            <p>
    Rhino is of course Mozilla's wonderful javascript engine for use in the jvm, 
    giving you both the elegance of the javascript language and E4X along with 
    the leverage of being able to script with java libraries for image manipulation,
    data storage and analytics, network i/o operations etc. 
            </p>
        </>
    },
    
    running: function(){
        return <>
            <h2>run</h2>
            <div class='span-15 push-2 border'>
                <h3>appengine</h3>
                <pre>
$> /path/to/appengine/bin/dev_appserver.sh /path/to/rhino-for-webapps/
                </pre>
                <h3>jetty</h3>
                <pre>
$> cd /path/to/rhino-for-webapps/
$> ./server.sh (start|stop|run|restart|check|supervise) 
                </pre>
                <h3>tomcat</h3>
                <pre>
$> mv /path/to/rhino-for-webapps /path/to/tomcat/webapps/ROOT
$> /path/to/tomcat/bin/startup.sh
                </pre>
            </div>
            <div class='span-4'>
                <p>
                    <span>
                    Theres not much to it, no coding required to run a server.
                    </span>
                    rhino-for-webapps is bundled with jetty so you can run it out
                    of the box, or just drop it in your Tomcat webapps/ROOT folder.  
                    Google AppEngine is built on Jetty as well.
                    The AppEngine development server is available <a 
                    href='http://code.google.com/appengine/downloads.html'>here</a>.
                </p>
            </div>
        </>;
    },
    
    response: function(m){
        return <>
            <h2>function (request, <span>response</span>)</h2>
            <div class="span-10 push-1">
                <p>
                    <span>This is really the the only interface</span> so it's 
                    the best place to start to understand what a light weight
                    bridge to javascript rhino-for-webapps offers. The response
                    just requires a <span>body</span> and a <span>header</span>
                    with a couple of properties, <span>Content-Type</span> and
                    <span>status</span>.  And its all just javascript from start
                    to finish. 
                </p>
                <p>
                    You can add arbitrary properties to the response header and
                    they are sent.  Binary content is also supported and we are adding
                    support for chunking and streaming.
                </p>
            </div>
            <div class='span-9 border'>
                <h3>response</h3>
                <pre>
                
function(request, response)&#x7B;
                
    response.body =  "Hello World";

    response.headers = &#x7B;
        status : 200,
        "Content-Type" : "text/html"
    &#x7D;;
    
&#x7D;
                </pre>
            </div>
        </>;
    },
    
    request: function(m){
        return <>
            <h2>function(<span>request</span>, response )</h2>
            <div class='span-14 push-2 first border'>
                <h3>request</h3>
                <table>{detail(m.request)}</table>
            </div>
            <div class='span-5 last'>
                <p>
                    <span>The request object is ready made, we didn't have to invent
                    a specification</span>, it's been around for ten's of years and
                    isnt going anywhere.  Best of all it's already here in reality
                    and supported by your local server farm, and most importantly,
                    by AppEngine which provides an immediate, free, highly scalable
                    cloud that you can deploy to with a single command.
                </p>
                <p>
                    <span>The request object is self documenting, here is the
                    request you made</span> for this page.  None of these 
                    properties are made up, so you can find plenty of documentation
                    about whats available from the servlet containers. But because
                    we show them here we may as well cover them breifly. Among the simple
                    properties on the request object are a few nested objects also 
                    shown below.
                </p>
            </div>
            <div class='span-5 push-1 first clear'>
                <p> 
                    <span>request.headers</span><br/>
                     - available for inspection
                </p>
            </div>
            <div class='span-14 border last'>
                <h3>request.headers</h3>
                <table>{detail(m.request.headers, "headers")}</table>
            </div>
            <div class='span-7 push-1 first clear'>
                <p>                    
                    <span>request.parameters</span><br/>
                    - try adding some <a href="?this=is&amp;what=you&amp;get">
                    ?this=is&amp;what=you&amp;get </a>
                </p>
            </div>
            <div class='span-10 push-2 border last'>
                <h3>request.parameters</h3>
                <table>{detail(m.request.parameters, "parameters")}</table>
            </div>
            <div class='span-7 push-1 first clear'>
                <p>       
                    <span>request.locales</span><br/>
                    - specifies prefered locales 
                </p>
            </div>
            <div class='span-10 push-2 border last'>
                <h3>request.locales</h3>
                <table>{detail(m.request.locales, "locales")}</table>
            </div>
            <div class='span-5 push-1 first clear'>
                <p>       
                    <span>request.attributes</span><br/>
                    - these are javax standard and/or servlet specific. 
                </p>
            </div>
            <div class='span-14 last border'>
                <h3>request.attributes</h3>
                <table>{detail(m.request.attributes, "attributes")}</table>
            </div>
        </>;
        
        function detail(obj,name){
            var list = <></>,prop;
            for(prop in obj){
                list += <tr>
                    <td>
                    {'request'+(name?'.'+name:'')+
                        (prop.match(/^[\w]+$/) ? '.'+prop: '["'+prop+'"]')}
                    </td>
                    <td>{obj[prop]}</td>
                </tr>;
            }
            return list.length() > 0 ? list : list += 
                <tr>
                    <td>{ 'request'+(name?('.'+name):'')}</td>
                    <td>{' {} '}</td>
                </tr>;
        };
    },
    
    dispatch: function(){
        return <>
            <h2><span>dispatch</span>(request, response)</h2>
            <div class='span-6 push-2'>
                <p>
                    <span>Dispatch handlers are how requests are connected
                    to the container.</span> They are actually like any other
                    request handler but we distinguish them from other handlers
                    because they are the only handlers that are registered with
                    AppEngine, Jetty, or Tomcat.
                </p>
                <p>
                    You could register every handler with the contianer, but we
                    prefer to write more javascript and less xml when possible,
                    so we like to think of the dispatch handlers as having the
                    role of inspecting request properties and passing the
                    requests on to other request handlers. <span>Here is a simple
                    example -&gt;</span> 
                </p>
            </div>
            <div class='span-11 push-1 border'>
                <h3>dispatch</h3>
                <pre>                   
var dispatch = function(request, response)&#x7B;
    print("Dispatching request");
    try&#x7B;
        switch(request.requestURI)&#x7B;
            case "/home/":
                Site.home(request, response);
                break;
            case "/examples/":
                Site.examples(request, response);
                break;
            default:
                Site._404(request, response);
        &#x7D;
    &#x7D;catch(e)&#x7B;
        print(e);
        Site._500(request, response, e);
    &#x7D;
    print("Finished dispatch");
    return response
&#x7D;;
                </pre>
            </div>
        </>;
    },
    shell: function(){
        return <>
            <h2><span>shell.js</span></h2>
            <div class='span-6 push-1'>
                <p>
                    <span>A shell is what loads required javascript files.</span>
                    No need to load them for every request. The shell is loaded
                    at start-up and you can enable file monitoring for development
                    environments where you don't want to have to restart the server
                    each time you make a change.
                </p>
                <p>
                    There are as many was to use a rhino-for-webapps shell as 
                    there are ways to use a javascript shell.<span>It's only
                    responsibility to the server is to expose a  dispatch request
                    handler.</span> 
                </p>
            </div>
            <div class='span-12 push-1 border'>
                <h3>shell</h3>
                <pre>
                        
try&#x7B;
    print("Loading shell for rhino-for-webapps website");

    load(
        'site.js',
        'templates/base.js',
        'templates/errors.js',
        'templates/pages.js',
        'dispatcher.js'
    );
    
    print("Loaded shell.");
&#x7D;catch(e)&#x7B;
    print(  
        "/***********************************\n"+
        " ERROR LOADING SHELL!!\n"+
        "    details \n:"+e.toString()+'\n'+
        "************************************/" 
    );
&#x7D;

                </pre>
            </div>
        </>;
    },
    servletMapping: function(){
        return <>
            <h2>&lt;servlet-<span>mapping</span>&gt;</h2>
            <div class='span-11 push-2 border'>
                <h3>mapping</h3>
                <pre>      

&lt;servlet-mapping&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;url-pattern&gt;/home/&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
&lt;servlet-mapping&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;url-pattern&gt;/examples/&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
&lt;servlet-mapping&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;url-pattern&gt;/example/*&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
      
                </pre>
            </div>
            <div class='span-7 '>
                <p>
                    <span>Servlet mappings are how the server knows about 
                    dispatchers.</span> Not much to it. You can only add
                    a specific path or every path under it (note the last
                    example contains a * at the end of the url-pattern).  
                    The lack of flexiblity in the
                    servlet mapping is one reason why we prefer the dispatcher
                    pattern.  The less mappings the better.
                </p>
                <p>
                    It's best to think about mapping in terms of site 
                    functionality.  You should be able to build most sites
                    with just a few mappings, <span>&lt;one mapping per major 
                    site feature.</span>
                </p>
            </div>
        </>;
    },
    servlet: function(){
        return <>
            <h2>&lt;<span>servlet</span>&gt;</h2>
            <div class='span-6 push-1'>
                <p>
                    <span>
                    You con have one or many bridge servlets for javascript.
                    The servlet can be used for many mappings.
                    </span> 
                    The dipatcher must be made available by a javascript shell,
                    which is just a javascript context that belongs to the
                    servlet, loaded at startup to make any javascript files you 
                    need available.
                </p>
                <p>
                    You can still load files on a per-request basis but in general
                    you should load all of your required libraries when you define
                    you <span>shell.js</span>
                </p>
            </div>
            <div class='span-13 push-1 border'>
                <h3>servlet</h3>
                
                <pre>      

&lt;servlet&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;servlet-class&gt;claypool.server.Servlet&lt;/servlet-class&gt;    
    &lt;init-param&gt;
        &lt;param-name&gt;[option-name]&lt;/param-name&gt;
        &lt;param-value&gt;[options-value]s&lt;/param-value&gt;
    &lt;/init-param&gt;   
    &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
&lt;/servlet&gt;  
    
                </pre>
            </div>
            <div class='span-19 push-2'>
                <p>
                    The servlet has a couple options available.  
                    <ul>
                        <li><span>script-base</span>
                            <strong>
                            Where the serlvet shell will load scripts from 
                            (which are specified with a relative url)
                            </strong>
                        </li>
                        <li><span>shell</span>
                            <strong>
                            The only javascript file that the servlet will
                            load by default.  The context created by that javascript 
                            file is reused across servlet requests (so you dont
                            have to reload the javascript every time)
                            </strong>
                        </li>
                        <li><span>dispatch-function</span>
                            <strong>
                            The globally scoped function exposed as a result
                            of executing the shell function which will be called
                            each time a servlet is invoked by a mapping
                            </strong>
                        </li>
                    </ul>
                </p>
            </div>
        </>;
    },
    root: function(){
        return<>
            <h2>http://server:port<span>/</span></h2>
            <div class='span-12 push-1 border'>
                <h3>root</h3>
                <h4>web.xml</h4>
                <pre>    
&lt;welcome-file-list&gt;
   &lt;welcome-file&gt;WEB-INF/root.jsp&lt;/welcome-file&gt;
&lt;/welcome-file-list&gt;
                </pre>
                <h4>WEB-INF/root.jsp</h4>
                <pre>    
&lt;jsp:forward page="/home/" /&gt;
                </pre>
            </div>
            <div class='span-6 push-1'>
                <p>
                    In order to avoid mapping every url to a servlet, (dont forget 
                    about static resources like /css/, /images/, /scripts/, etc),  
                    we can't directly map the root context (/). Instead we use a 
                    simple, standard servlet pattern
                    to allow the container to <span>forward requests to / to the 
                    dispatcher of your choice.</span>
                </p>
            </div>
        </>;
    }
};