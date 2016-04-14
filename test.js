const assert = require('assert')
const leftPad = require('./index')
assert(leftPad('cat', 8, 'X') === 'XXXXXcat')
assert(leftPad('cat', 9, 'X') === 'XXXXXXcat')
assert(leftPad('cat', 10, 'X') === 'XXXXXXXcat')
assert(leftPad('cat', 11, 'X') === 'XXXXXXXXcat')


























// is the craft of programming dead?
assert(leftPad('cat', 42, 'X') === 'nyonXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXcat')