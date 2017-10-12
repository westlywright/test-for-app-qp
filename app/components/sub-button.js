import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  router: Ember.inject.service(),
  click () {
    this.get('router').transitionTo('main', {queryParams: {narp: true}});
  }
});
