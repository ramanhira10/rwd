import { View } from 'backbone.marionette';
import FormTemplate from '../templates/form.html';

export default class FormView extends View {

  get template () {
    return FormTemplate;
  }

  get tagName () {
    return 'form';
  }

  triggers() {

    return {

      submit: 'add:todo:item'
    };
  }

  modelEvents() {

    return {

      change: 'render'
    };
  }

  ui() {

    return {
      assignee: '#id_assignee',
      text: '#id_text',
      btnAdd: '#btn-add'
    };
  }

  events () {
    return {
      'click @ui.btnAdd': () => {
        console.log('u clicked this button');
      }
    };
  }
}
