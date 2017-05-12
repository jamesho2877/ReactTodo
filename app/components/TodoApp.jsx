var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
   getInitialState: function() {
      return {
         todos: [
            {
               id: 1,
               text: 'Walk a dog'
            }, {
               id: 2,
               text: 'Clean the yard'
            }, {
               id: 3,
               text: 'Hang around with friends'
            }, {
               id: 4,
               text: 'Buy some milk'
            }
         ]
      };
   },
   render: function() {
      var {todos} = this.state;

      return (
         <TodoList todos={todos} />
      );
   }

});

module.exports = TodoApp;
