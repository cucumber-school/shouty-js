const { Given, When, Then } = require('cucumber')

Given('Lucy is located {int}m from Sean', function (distance) {
  console.log(distance)
  return 'pending'
})

When('Sean shouts “free bagels at Sean’s”', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('Lucy hears Sean’s message', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
