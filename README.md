[![Build Status](https://travis-ci.org/dalkegama/tdd-calculator.svg?branch=master)](https://travis-ci.org/dalkegama/tdd-calculator)
# String calculator

_TDD kata with NUnit and Shouldly. You will need NUnit 3 Test Adapter extension._

### Create a method that, given a delimited string, returns the sum of the values.

* empty or null string returns 0
* comma delimited numbers are added together, i.e. `"1"` returns `1`, `"1,2"` returns `3`, etc...
* allow newlines to act as a delimiter, i.e. `"1,2\n10"` returns `13`
* empty lines or values are treated as zeros, i.e. `"1,,2\n\n\n5"` returns `8`
* negative numbers and non-integers throw an exception
* support different delimiters, first line declares the delimiter when started with hash:
  ```c#
  #|
  1|2|10
  ```
  returns `13`
* delimiters can be any length:
  ```c#
  #--
  1--7--23
  4--4
  ```
  returns `39`