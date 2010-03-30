/**
 * @author thatcher
 */
function hello(request, response){
    response.body = 'Hello World!';
    response.headers = {
        status: 200,
        'Content-Type': 'text/plain'
    };
}