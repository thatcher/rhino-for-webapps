//When the servlet is first visited the 'outer shell'
//is loaded.  You can load additional resources here.
try{
    print("\n\n\t@Loading shell for envjs examples@\n");

    load('../lib/env.rhino.0.9.0.js');
    load('dispatcher.js');
    
    print("Loaded shell.");
}catch(e){
    print(  "\t/********************************************************\n"+
            "\t * ERROR LOADING SHELL!!"+
            "\t *    details :"+
            "\t *    " + e.toString() + 
            "\t ********************************************************/"  );
}

