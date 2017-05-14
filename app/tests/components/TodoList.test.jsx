var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
   it('should exist', () => {
      expect(TodoList).toExist();
   });

   it('should render one Todo component for each Todo item', () => {
      var todos = [{
         id: 1,
         text: 'test sample 1'
      }, {
         id: 2,
         text: 'test sample 2'
      }];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

      expect(todoComponents.length).toBe(todos.length);
   });
});
