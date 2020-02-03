const { Given, When, Then } = require('cucumber')
const { Person } = require('../../src/shouty')
const assert = require('assert');

Given('Lucy is located {int}m from Sean', function (distance) {
  this.lucy = new Person
  this.sean = new Person
  this.lucy.move_to(distance)
});

When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.message = message
});

Then('Lucy hears Sean’s message', function () {
  assert.deepEqual(this.lucy.messagesHeard(), [this.message])
});
