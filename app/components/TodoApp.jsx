var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
   handleAddTodo: function(text) {
      alert('new todo: ' + text);
   },
   render: function() {
      var {todos} = this.state;

      return (
         <div className="row">
            <div className="column small-centered medium-6 large-6">
               <TodoList todos={todos} />
               <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
         </div>
      );
   }

});

module.exports = TodoApp;
