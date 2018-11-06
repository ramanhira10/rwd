import '../styles/styles.less';

import TodoView from './views/layout';
import TodoModel from './models/todo';

export class TodoApp extends Mn.Application {

  onStart () {

    let bbCollection = new Backbone.Collection([{
        assignee: 'Scott',
        text: 'Write a book about Marionette'
      }, {
        assignee: 'Andrew',
        text: 'Do some coding'
      }
    ]);

    const todoView = new TodoView({
      collection: bbCollection,
      model: new TodoModel()
    });

    todoView.render();
  }
}

var app = new TodoApp;
app.start();
