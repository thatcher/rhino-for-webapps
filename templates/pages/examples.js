/**
 * @author thatcher
 */
templates.pages.examples = {

    render : function(m){
        return <>
            <div id="welcome" class='span-23'> 
                <h3>examples</h3>
                <p>
    These are just a few example of how to use the rhino-for-webapps bridge
    to leverage javascript on AppEngine, Jetty, and Tomcat.  If you some additional
    examples you would like to share please let us know. 
                </p>
            </div>
            <div id="helloworld" class='span-16 push-4 border'> 
                 <h2><span>hello </span> world</h2>
                 <p>
     Our most stripped down, bare bones example to help focus on just the 
     essentials.<br/>
                 <a href='/examples/helloworld/'>Try it.</a>
                 </p>
            </div>
            <div id="common" class='span-16 push-4 border'> 
                 <h2><span>common cases</span> - redirects, handling posts etc</h2>
                 <p>
     This example demostrates how to achieve common use case.  Please let us know if
     you need a use case covered or have one we've missed.<br/>
                 <a href='#/examples/common/'>Under construction</a>
                 </p>
            </div>
            <div id="envjs" class='span-16 push-4 border'> 
                 <h2><span>envjs</span> - browser javascript on the server</h2>
                 <p>
     This example demostrates how to integrate with Envjs so you can use all
     of your favorite client javascript, like jQuery.<br/>
                 <a href='/examples/envjs/'>Try it.</a>
                 </p>
            </div>
            <div id="common" class='span-16 push-4 border'> 
                 <h2><span>svg</span> - comming soon</h2>
                 <p>
     This example demostrates how to render svg using the batik library.<br/>
                 <a href='#/examples/svg/'>Comming soon.</a>
                 </p>
            </div>
        </>;
    }
    
};
