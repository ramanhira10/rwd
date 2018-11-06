import { View } from 'backbone.marionette';
import TodoItemTemplate from '../templates/todoitem.html';

class Todo extends View {

  get template () {
    return TodoItemTemplate;
  }

  get tagName () {
    return 'li';
  }
}

export default class ListView extends Mn.CollectionView {

  get tagName () {
    return 'ul';
  }

  get childView () {
    return Todo;
  }
}
