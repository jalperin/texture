'use strict';

var AnnotationCommand = require('substance/ui/AnnotationCommand');

function UnsupportedNodeCommand() {
  UnsupportedNodeCommand.super.apply(this, arguments);
}

UnsupportedNodeCommand.Prototype = function() {

  this.getAnnotationData = function() {
    return {
      url: ""
    };
  };

  this.canCreate = function() {
    return false;
  };

  this.canFuse = function() {
    return false;
  };

  // When there's some overlap with only a single annotation we do an expand
  this.canEdit = function(annos, sel) { // eslint-disable-line
    return annos.length === 1;
  };

  this.canDelete = function(annos, sel) { // eslint-disable-line
    return false;
  };

};

AnnotationCommand.extend(UnsupportedNodeCommand);

UnsupportedNodeCommand.static.name = 'unsupported';

module.exports = UnsupportedNodeCommand;