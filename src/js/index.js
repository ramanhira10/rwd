import '../styles/styles.less';

import TodoView from './views/layout';
import TodoModel from './models/todo';

const initialData = [{
    assignee: 'Scott',
    text: 'Write a book about Marionette'
  }, {
    assignee: 'Andrew',
    text: 'Do some coding'
  }
];

export class TodoApp extends Mn.Application {

  onStart (options) {

    const todoView = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new TodoModel()
    });

    todoView.render();
  }
}

var app = new TodoApp;
app.start({initialData: initialData});
