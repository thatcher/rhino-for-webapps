/**
 * @author thatcher
 */
load('WEB-INF/lib/env.rhino.js');
load('plugins/qunit.env.js');

window.location = 'test/index.html?'+arguments.join('&');