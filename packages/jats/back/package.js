'use strict';

var Back = require('./Back');
var BackConverter = require('./BackConverter');
var BackComponent = require('./BackComponent');

module.exports = {
  name: 'back',
  configure: function(config) {
    config.addNode(Back);
    config.addConverter('jats', BackConverter);
    config.addComponent(Back.type, BackComponent);
    config.addStyle(__dirname, '_back.scss');
  }
};