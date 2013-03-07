var Calculator;

Calculator = (function() {

  function Calculator() {
    this.calculated_number = 0;
    this.inputed_number = 0;
    this.candidate_number = 0;
  }

  Calculator.prototype.add = function() {
    this.calculated_number = this.inputed_number + this.candidate_number;
    return this.calculated_number;
  };

  Calculator.prototype.minus = function() {
    this.calculated_number = this.candidate_number - this.inputed_number;
    return this.calculated_number;
  };

  Calculator.prototype.multi = function() {
    this.calculated_number = this.inputed_number * this.candidate_number;
    return this.calculated_number;
  };

  Calculator.prototype.divide = function() {
    if (this.inputed_number === 0) {
      return 0;
    }
    this.calculated_number = this.candidate_number / this.inputed_number;
    return this.calculated_number;
  };

  Calculator.prototype.push = function(num) {
    this.inputed_number *= 10;
    return this.inputed_number += num;
  };

  Calculator.prototype.update = function() {
    this.candidate_number = this.inputed_number;
    return this.inputed_number = 0;
  };

  Calculator.prototype.result = function() {
    return this.calculated_number;
  };

  Calculator.prototype.get_input = function() {
    return this.inputed_number;
  };

  Calculator.prototype.memoried = function() {
    return this.candidate_number;
  };

  Calculator.prototype.clear = function() {
    this.calculated_number = 0;
    this.inputed_number = 0;
    return this.candidate_number = 0;
  };

  Calculator.prototype.to_string = function() {
    return 'result:' + this.calculated_number + "\n" + 'input:' + this.inputed_number + "\n" + 'temp:' + this.candidate_number;
  };

  module.exports = Calculator;

  return Calculator;

})();
