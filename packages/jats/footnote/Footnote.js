'use strict';

var Container = require('substance/model/Container');

function Footnote() {
  Footnote.super.apply(this, arguments);
}

Container.extend(Footnote);

Footnote.type = 'footnote';

/*
  Content
    (label?, p+)
*/
Footnote.define({
  attributes: { type: 'object', default: {} },
  label: { type: 'label', optional: true },
  nodes: { type: ['p'], default: [] }
});

module.exports = Footnote;
