import Ember from 'ember';
import layout from '../templates/components/calendly-popup-widget';

export default Ember.Component.extend({
  layout,
  color: '#00a2ff',
  text: 'Schedule time with me',
  branding: false,
  didInsertElement() {
    this._super(...arguments);
    Calendly.initBadgeWidget(this.getProperties(['url', 'text', 'color', 'branding']));
  },
  willDestroyElement() {
    this._super(...arguments);
    Calendly.destroyBadgeWiget();
    Calendly.closePopupWidget();
  }
});

