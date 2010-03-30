/*
 *  
 */
package claypool.server;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 */
public class Servlet extends HttpServlet {

    protected String shellFile;
    protected String dispatchFunction;
    protected String base;
    protected String contextPath;
    protected String activeReload;
    protected String applicationContext;
    protected String optimizationLevel;
    private Shell shell;
    private RequestHandler requestHandler;
    
    /* (non-Javadoc)
     * @see javax.servlet.GenericServlet#init(javax.servlet.ServletConfig)
     */
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        String localBase = getServletConfig().
        	getServletContext().
        	getRealPath("/").toString();
        this.contextPath = localBase;
        this.base  = config.getInitParameter("script-base")!=null?
            localBase + config.getInitParameter("script-base"):
            localBase + "/";
        this.shellFile = 
        	config.getInitParameter("shell")!=null?
            config.getInitParameter("shell"):
            "shell.js";
        this.dispatchFunction  = 
        	config.getInitParameter("dispatch-function")!=null?
        	config.getInitParameter("dispatch-function"):
        	"dispatch";
        this.activeReload  = 
        	config.getInitParameter("active-reload")!=null?
			config.getInitParameter("active-reload"):
			"true";
		this.optimizationLevel = 
			config.getInitParameter("opt-level")!=null?
			config.getInitParameter("opt-level"):
			"-1";
        
        if(this.shell == null){
            //load global shell
            try {
                this.base = new File(this.base).toURL().toString();
                getServletConfig().getServletContext().
                    log("APPLICATION BASE PATH : " + this.base);
                getServletConfig().getServletContext().
                    log("APPLICATION SHELL : " + this.shellFile);
                getServletConfig().getServletContext().
					log("APPLICATION DISPATCH METHOD : " + this.dispatchFunction);
                getServletConfig().getServletContext().
					log("APPLICATION ACTIVE RELOAD : " + this.activeReload);
                getServletConfig().getServletContext().
					log("APPLICATION OPT LEVEL : " + this.optimizationLevel);
                // load the JavaScript files for the web app framework and
                // the files for the specific web app.
                this.shell = new Shell(
					this.contextPath, 
					this.base, 
					this.shellFile, 
					this.activeReload,
					this.optimizationLevel
                );
            }catch (Exception ee) {
                getServletConfig().getServletContext().
                    log(ee.toString());
            }
        }
        
        if(this.requestHandler == null){
            this.requestHandler = new RequestHandler(
                this.shell, 
                this.dispatchFunction, 
                getServletConfig().getServletContext());
        }
        
        getServletConfig().getServletContext().
            log("Application ready... ");
    }

    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doGet(
     * 	javax.servlet.http.HttpServletRequest, 
     * 	javax.servlet.http.HttpServletResponse)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException {
        
        getServletConfig().getServletContext().
            log("CONTEXT PATHNAME : " + request.getContextPath());
        getServletConfig().getServletContext(). 
            log("SERVLET PATHNAME : " + request.getServletPath());
        
        //HttpSession session = request.getSession(true);
        //RequestHandler requestHandler = 
            //(RequestHandler)session.getValue(request.getServletPath());
        //session.putValue(request.getServletPath(), requestHandler);
        
        if(!this.requestHandler.processRequest(request, response)){
            String staticResource = base + request.getPathInfo();
            getServletConfig().getServletContext().
                log("Forwarding 404 to real resource if available: " + staticResource);
            response.reset();
            getServletConfig()
                .getServletContext()
                .getRequestDispatcher( request.getPathInfo())
                .forward(request, response);
        }
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doPost(
     * 	javax.servlet.http.HttpServletRequest, 
     * 	javax.servlet.http.HttpServletResponse)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doPut(
     * 	javax.servlet.http.HttpServletRequest, 
     * 	javax.servlet.http.HttpServletResponse)
     */
    protected void doPut(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doDelete(
     * 	javax.servlet.http.HttpServletRequest, 
     * 	javax.servlet.http.HttpServletResponse)
     */
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doHead(
     * 	javax.servlet.http.HttpServletRequest, 
     * 	javax.servlet.http.HttpServletResponse)
     */
    protected void doHead(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doOptions(
     * 	javax.servlet.http.HttpServletRequest, 
     * javax.servlet.http.HttpServletResponse)
     */
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) 
    	throws ServletException, IOException{
        doGet(request, response);
    }
    
    /* (non-Javadoc)
     * @see javax.servlet.GenericServlet#destroy()
     */
    public void destroy() {
        super.destroy();
    }
    

}
