const { Given, When, Then } = require('cucumber')
const { Person } = require('../../src/shouty')

Given('Lucy is located {int}m from Sean', function (distance) {
  this.lucy = new Person
  this.sean = new Person
  this.lucy.move_to(distance)
});

When('Sean shouts “free bagels at Sean’s”', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('Lucy hears Sean’s message', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
