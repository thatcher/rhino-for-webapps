/**
 * @author thatcher
 * this is a very basic example, trying to avoid doing much other than 
 * highlight the key feature points of rhino-for-webapps while still
 * making the page look nice. there are much better ways of providing
 * mvc separation of concern but that is not the goal of rhino-for-webapps
 * 
 * These templates use E4X which makes XML a native part of the Javascript
 * language.  If your not familiar with it check out this resource:
 * 
 * http://www.rephrase.net/days/07/06/e4x
 * 
 */
var templates = {

    render: function(m){
        return templates.base(m).toXMLString();
    },
    base: function(m){
        return <html>
            <head>
                
                <meta   content="en-us" 
                        http-equiv="Content-Language"/>
                <meta   content="text/html; charset=utf-8" 
                        http-equiv="Content-Type"/>
                <meta   name="keywords"
                        content="javascript, appengine, jetty, tomcat, java,
                                rhino, webapps, servlet, jquery, envjs,
                                claypool, thatcher, resig"/>
                <meta   name="description"
                        content="Rhino-for-webapps is a simple bridge technology 
                            for enabling development of webapps with javascript in 
                            proven containers like Jetty, Tomcat, and of course
                            Google AppEngine." />
                <title>{m.title}</title>
                <link   href="/css/blueprint/screen.css"   
                        type="text/css" 
                        media="screen, projection"
                        rel="stylesheet" />
                <link   href="/css/sprite.css"   
                        type="text/css" 
                        media="screen, projection"
                        rel="stylesheet" />
                <link   href="/css/site.css" 
                        type="text/css" 
                        rel="stylesheet" />
            </head>
            <body class='container'>
                <div id='header' class='container'>
                    { templates['header'](m) }
                </div>
                <div id="main" class='container'>
                { m.page?templates.pages[m.page].render(m):errors[m.error](m) }
                </div>
                <div id="footer" class='container'>
                    <div class="column span-23 last">
                        { templates['footer'](m) }
                    </div>
                </div>
            </body>
        </html>;

    },
    
    
    header: function(m){
        return <>
            <div class="column span-15 first">
                <a href={m.context}>
                    <img    src="/images/icon-brown.png" 
                            alt="Rhino For Webapps " 
                            height='80px'
                            style='float:left;'/>
                    
                    <h1 style='float:left;'>
                        Javascript on AppEngine
                    </h1>
                </a> 
            </div> 
            <div class="column span-7 prepend-top last" id='global-nav' >
                <ul >
                    <li><a href="/">home</a></li> | 
                    <li><a href="/examples/">examples</a></li> | 
                    <li>
                        <span id="sharethisbutton">
                            <script type="text/javascript" 
                                    src="http://w.sharethis.com/widget/?tabs=web%2Cpost%2Cemail&amp;charset=utf-8&amp;style=default&amp;publisher=b0f530fc-b206-4fb8-b8a8-478191e675c2&amp;headerbg=%23c20000&amp;linkfg=%23c20000"
									defer='defer'>
                                    <!-- -->
                            </script>
                        </span>
                    </li>
                </ul>
            </div>
        </>;
    },
    
    
    pages: {
        //pages are defined in templates/pages/*.js
    },
    
    footer: function(m){
        return <> 
        <div id='copyright' style='text-align:center;'>
            <img id="claypool-logo" 
                 src={m.context+"/images/claypool-button.png"} 
                 alt="jquery-claypool" 
                 title="This site uses javascript on google apps eninge" 
                 width="80" 
                 height="15"
                 style='float:left;'/>
            <em>copyright 2009-2010 rhino-for-webapps team</em>
            <img id="blueprint-logo" 
                 src={m.context+"/images/button.png"} 
                 alt="blueprint" 
                 title="This site uses blueprint-css" 
                 width="80" 
                 height="15"
                 style='float:right;'/> 
        </div>
        <div style='text-align:center;margin:0 0 10px 0;padding:0;'>{new Date()}</div>
        </>
    }

};
