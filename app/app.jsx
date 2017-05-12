var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// Load app.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
   <h1>Boilerplate 3 Project</h1>,
   document.getElementById('app')
)
