try{

    load(
        'scripts/helloworld/hello.js',
        'scripts/helloworld/dispatcher.js'
    );

}catch(e){
    print(  
        "/***********************************\n"+
        " ERROR LOADING HELLO SHELL!!\n"+
        "    details \n:"+e.toString()+'\n'+
        "************************************/" 
    );
}

