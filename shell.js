try{
    print("Loading shell for rhino-for-webapps homepage");

    load(
        'scripts/site.js',
        'templates/base.js',
        'templates/errors.js',
        'templates/pages/home.js',
        'templates/pages/examples.js',
        'scripts/dispatch.js'
    );
    
}catch(e){
    print(  
        "/***********************************\n"+
        " ERROR LOADING SHELL!!\n"+
        "    details \n:"+e.toString()+'\n'+
        "************************************/" 
    );
}

