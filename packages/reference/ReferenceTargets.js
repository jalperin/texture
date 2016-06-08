'use strict';

var Component = require('substance/ui/Component');

/**
  Takes a list of available reference targets (e.g. figure nodes)
  and a list of ids (selected targets)
*/
function ReferenceTargets() {
  ReferenceTargets.super.apply(this, arguments);
}

ReferenceTargets.Prototype = function() {

  this.render = function($$) {
    var el = $$('div').addClass('sc-reference-targets');
    var node = this.props.node;
    var componentRegistry = this.context.componentRegistry;
    var availableTargets = this.props.availableTargets;

    availableTargets.forEach(function(targetNode) {
      var TargetComponent = componentRegistry.get(targetNode.type+'-target');
      el.append(
        $$(TargetComponent, {node: node})
      );
    });
    return el;
  };
};

Component.extend(ReferenceTargets);

module.exports = ReferenceTargets;