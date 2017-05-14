var React = require('react');

var AddTodo = React.createClass({
   handleFormSubmit: function (e) {
      e.preventDefault();
      var todoText = this.refs.todoText.value;

      if (todoText.trim().length > 0 && todoText.match(/([\w.]+)/)) {
         this.refs.todoText.value = '';
         this.props.onAddTodo(todoText);
      } else {
         this.refs.todoText.focus();
      }
   },
   render: function() {
      return (
         <div>
            <form onSubmit={this.handleFormSubmit}>
               <input type="text" ref="todoText" placeholder="What do you need to do ?"/>
               <button className="button expanded primary">Add Todo</button>
            </form>
         </div>
      );
   }

});

module.exports = AddTodo;
