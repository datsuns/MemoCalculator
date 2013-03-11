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

  create_font:(widget) ->
    widget.font = {fontSize:'90%'}

  create_output_label: ->
    label = Ti.UI.createLabel(
      color:'#000000',
      text:'0',
      height:'10%',
      width:'100%',
      top:0,
      left:0,
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
      backgroundColor: '#CDE',
    )
    @create_font(label)
    label

  create_memo_area: ->
    Ti.UI.createTextArea(
      top:'70%',
      left:0,
      height:'30%',
      width:'100%',
      backgroundColor: '#CDE',
      hintText: 'MEMO'
    )

  create_key_buttons:(parent, output) ->
    buttons = [
      @create_number_button(parent, output,   7,   '10%', '0%'),
      @create_number_button(parent, output,   8,   '10%', '20%'),
      @create_number_button(parent, output,   9,   '10%', '40%'),
      @create_function_button(parent, output, '/', '10%', '60%'),
      @create_function_button(parent, output, 'c', '10%', '80%'),

      @create_number_button(parent, output,   4,   '25%', '0%'),
      @create_number_button(parent, output,   5,   '25%', '20%'),
      @create_number_button(parent, output,   6,   '25%', '40%'),
      @create_function_button(parent, output, '*', '25%', '60%'),
      @create_function_button(parent, output, 'debug', '25%', '80%'),

      @create_number_button(parent, output,   1,   '40%', '0%'),
      @create_number_button(parent, output,   2,   '40%', '20%'),
      @create_number_button(parent, output,   3,   '40%', '40%'),
      @create_function_button(parent, output, '-', '40%', '60%'),

      @create_number_button(parent, output,   0,   '55%', '0%'),
      @create_function_button(parent, output, '.', '55%', '20%'),
      @create_function_button(parent, output, '=', '55%', '40%'),
      @create_function_button(parent, output, '+', '55%', '60%'),

    ]
    for b in buttons
      @create_font(b)
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
    b.addEventListener('click', @debug_print) if char is 'debug'
    if char is '='
      b.addEventListener('click', (e)=>
        @calc_operation(@calculator)
        output.setText @calculator.result()
        @calc_operation = @calc_nothing
      )
    if char is 'c'
      b.addEventListener('click', (e)=>
        @calculator.clear()
        output.setText @calculator.result()
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

  debug_print: =>
    str =  "result: #{@calculator.result()}\n"
    str += "input:  #{@calculator.get_input()}\n"
    str += "memory: #{@calculator.memoried()}\n"
    alert str

  module.exports = AppMain
