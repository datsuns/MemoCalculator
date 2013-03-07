Button = require 'ui/common/button'
Calculator = require 'ui/common/Calculator'

class AppMain
  constructor: ->
    @calculator = new Calculator()
    @calc_operation = @calc_nothing
    return @create_main_view()

  create_main_view: ->
    self = Ti.UI.createView()
    label = @create_output_label()
    self.add label
    @create_key_buttons( self, label )
    self.add @create_memo_area()
    self

  create_output_label: ->
    Ti.UI.createLabel(
      color:'#000000',
      text:'0',
      height:'10%',
      width:'60%',
      top:0,
      left:0,
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
      backgroundColor: '#CDE'
    )

  create_memo_area: ->
    Ti.UI.createTextArea(
      top:'85%',
      left:0,
      height:'15%',
      width:'60%',
      backgroundColor: '#CDE'
    )

  create_key_buttons:(parent, output) ->
    buttons = [
      @create_number_button(parent, output,   7,   '10%', '0%'),
      @create_number_button(parent, output,   8,   '10%', '15%'),
      @create_number_button(parent, output,   9,   '10%', '30%'),
      @create_function_button(parent, output, '/', '10%', '45%'),

      @create_number_button(parent, output,   4,   '25%', '0%'),
      @create_number_button(parent, output,   5,   '25%', '15%'),
      @create_number_button(parent, output,   6,   '25%', '30%'),
      @create_function_button(parent, output, '*', '25%', '45%'),

      @create_number_button(parent, output,   1,   '40%', '0%'),
      @create_number_button(parent, output,   2,   '40%', '15%'),
      @create_number_button(parent, output,   3,   '40%', '30%'),
      @create_function_button(parent, output, '-', '40%', '45%'),

      @create_number_button(parent, output,   0,   '55%', '0%'),
      @create_function_button(parent, output, '.', '55%', '15%'),
      @create_function_button(parent, output, '=', '55%', '30%'),
      @create_function_button(parent, output, '+', '55%', '45%'),

      @create_function_button(parent, output, 'c', '70%', '45%'),
    ]
    for b in buttons
      parent.add b

  create_number_button:(parent, output, num, top, left) ->
    b = Button(String(num), top, left)
    b.addEventListener 'click', (e)=>
      @calculator.push(num)
      output.setText @calculator.get_input()
    b

  create_function_button:(parent, output, char, top, left) ->
    b = Button(char, top, left)
    b.addEventListener('click', @switch_plus) if char is '+'
    b.addEventListener('click', @switch_minus) if char is '-'
    if char is '='
      b.addEventListener('click', (e)=>
        @calc_operation(@calculator)
        output.setText @calculator.result()
        @calc_operation = @calc_nothing
      )
    b

  switch_plus:(e) =>
    @calculator.update()
    @calc_operation = @calc_plus

  switch_minus:(e) =>
    @calculator.update()
    @calc_operation = @calca_minus

  calc_plus:(operator) -> operator.add()

  calca_minus:(operator) -> operator.minus()

  calc_nothing:(operator) ->

  module.exports = AppMain
