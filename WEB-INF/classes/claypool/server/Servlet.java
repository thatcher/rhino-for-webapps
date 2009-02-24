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

    //protected ThreadLocal threadRequestHandler;
    //protected RequestHandler requestHandler = null;
    protected String shellFile;//applicationContainer;
    protected String dispatchFunction;//applicationLocation;
    protected String base;//applicationBasePath;
    private Shell shell;
    
    /* (non-Javadoc)
     * @see javax.servlet.GenericServlet#init(javax.servlet.ServletConfig)
     */
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        String localBase = getServletConfig().getServletContext().getRealPath("/").toString();
        this.base  = config.getInitParameter("script-base")!=null?
            localBase + config.getInitParameter("script-base"):
            localBase + "/WEB-INF/jsx/";
        this.shellFile = config.getInitParameter("shell");
        this.dispatchFunction  = config.getInitParameter("dispatch-function");
        getServletConfig().getServletContext().log("Application ready... ");
    }

    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doGet(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(this.shell == null){
            //load global shell
            try {
                base = new File(base).toURL().toString();
                getServletConfig().getServletContext().log("APPLICATION BASE PATH : "+base);
                getServletConfig().getServletContext().log("APPLICATION SHELL : "+ shellFile);
                getServletConfig().getServletContext().log("APPLICATION DISPATCH METHOD : "+ dispatchFunction);
                // load the JavaScript files for the web app framework and
                // the files for the specific web app.
                this.shell = new Shell(base, shellFile);
            }catch (Exception ee) {
                getServletConfig().getServletContext().log(ee.toString());
            }
        }
        HttpSession session = request.getSession(true);
        RequestHandler requestHandler = (RequestHandler)session.getValue("requestHandler");
        if(requestHandler == null){
            getServletConfig().getServletContext().log("CONTEXT PATHNAME : " + request.getContextPath());
            getServletConfig().getServletContext().log("SERVLET PATHNAME : " + request.getServletPath());
            requestHandler = new RequestHandler(
                shell, 
                dispatchFunction, 
                getServletConfig().getServletContext());
            session.putValue("requestHandler", requestHandler);
        }
        if(!requestHandler.processRequest(request, response)){
            String staticResource = base + request.getPathInfo();
            getServletConfig().getServletContext().log("Forwarding 404 to real resource if available: " + staticResource);
            response.reset();
            getServletConfig()
                .getServletContext()
                .getRequestDispatcher( request.getPathInfo())
                .forward(request, response);
        }
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doPost(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doPut(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doDelete(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doHead(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doHead(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        doGet(request, response);
    }
    /* (non-Javadoc)
     * @see javax.servlet.http.HttpServlet#doOptions(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
     */
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        doGet(request, response);
    }
    
    /* (non-Javadoc)
     * @see javax.servlet.GenericServlet#destroy()
     */
    public void destroy() {
        super.destroy();
    }
    

}
