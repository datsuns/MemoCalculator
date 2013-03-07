var AppMain, Button, Calculator,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Button = require('ui/common/button');

Calculator = require('ui/common/Calculator');

AppMain = (function() {

  function AppMain() {
    this.switch_minus = __bind(this.switch_minus, this);

    this.switch_plus = __bind(this.switch_plus, this);
    this.calculator = new Calculator();
    this.calc_operation = this.calc_nothing;
    return this.create_main_view();
  }

  AppMain.prototype.create_main_view = function() {
    var label, self;
    self = Ti.UI.createView();
    label = this.create_output_label();
    self.add(label);
    this.create_key_buttons(self, label);
    self.add(this.create_memo_area());
    return self;
  };

  AppMain.prototype.create_output_label = function() {
    return Ti.UI.createLabel({
      color: '#000000',
      text: '0',
      height: '10%',
      width: '60%',
      top: 0,
      left: 0,
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
      backgroundColor: '#CDE'
    });
  };

  AppMain.prototype.create_memo_area = function() {
    return Ti.UI.createTextArea({
      top: '85%',
      left: 0,
      height: '15%',
      width: '60%',
      backgroundColor: '#CDE'
    });
  };

  AppMain.prototype.create_key_buttons = function(parent, output) {
    var b, buttons, _i, _len, _results;
    buttons = [this.create_number_button(parent, output, 7, '10%', '0%'), this.create_number_button(parent, output, 8, '10%', '15%'), this.create_number_button(parent, output, 9, '10%', '30%'), this.create_function_button(parent, output, '/', '10%', '45%'), this.create_number_button(parent, output, 4, '25%', '0%'), this.create_number_button(parent, output, 5, '25%', '15%'), this.create_number_button(parent, output, 6, '25%', '30%'), this.create_function_button(parent, output, '*', '25%', '45%'), this.create_number_button(parent, output, 1, '40%', '0%'), this.create_number_button(parent, output, 2, '40%', '15%'), this.create_number_button(parent, output, 3, '40%', '30%'), this.create_function_button(parent, output, '-', '40%', '45%'), this.create_number_button(parent, output, 0, '55%', '0%'), this.create_function_button(parent, output, '.', '55%', '15%'), this.create_function_button(parent, output, '=', '55%', '30%'), this.create_function_button(parent, output, '+', '55%', '45%'), this.create_function_button(parent, output, 'c', '70%', '45%')];
    _results = [];
    for (_i = 0, _len = buttons.length; _i < _len; _i++) {
      b = buttons[_i];
      _results.push(parent.add(b));
    }
    return _results;
  };

  AppMain.prototype.create_number_button = function(parent, output, num, top, left) {
    var b,
      _this = this;
    b = Button(String(num), top, left);
    b.addEventListener('click', function(e) {
      _this.calculator.push(num);
      return output.setText(_this.calculator.get_input());
    });
    return b;
  };

  AppMain.prototype.create_function_button = function(parent, output, char, top, left) {
    var b,
      _this = this;
    b = Button(char, top, left);
    if (char === '+') {
      b.addEventListener('click', this.switch_plus);
    }
    if (char === '-') {
      b.addEventListener('click', this.switch_minus);
    }
    if (char === '=') {
      b.addEventListener('click', function(e) {
        _this.calc_operation(_this.calculator);
        output.setText(_this.calculator.result());
        return _this.calc_operation = _this.calc_nothing;
      });
    }
    return b;
  };

  AppMain.prototype.switch_plus = function(e) {
    this.calculator.update();
    return this.calc_operation = this.calc_plus;
  };

  AppMain.prototype.switch_minus = function(e) {
    this.calculator.update();
    return this.calc_operation = this.calca_minus;
  };

  AppMain.prototype.calc_plus = function(operator) {
    return operator.add();
  };

  AppMain.prototype.calca_minus = function(operator) {
    return operator.minus();
  };

  AppMain.prototype.calc_nothing = function(operator) {};

  module.exports = AppMain;

  return AppMain;

})();
