/**
 * @author thatcher
 */
var errors = {

    _500: function(m){
        return <>
            <div id="500" class='span-16 push-4 border'> 
                <h2><span>oops</span>!</h2>
                <p>{m.stackTrace}</p>
            </div>
        </>;
    }

};

