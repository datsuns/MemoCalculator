class Calculator
  constructor: ->
    @calculated_number = 0
    @inputed_number = 0
    @candidate_number = 0

  add: ->
    @calculated_number = @inputed_number + @candidate_number
    return @calculated_number

  minus: ->
    @calculated_number = @candidate_number - @inputed_number
    return @calculated_number

  multi: ->
    @calculated_number = @inputed_number * @candidate_number
    return @calculated_number

  divide: ->
    if @inputed_number is 0
      return 0
    @calculated_number = @candidate_number / @inputed_number
    return @calculated_number

  push:(num) ->
    @inputed_number *= 10
    @inputed_number += num

  update: ->
    @candidate_number = @inputed_number
    @inputed_number = 0

  result: -> return @calculated_number

  get_input: -> return @inputed_number

  memoried: -> return @candidate_number

  clear: ->
    @calculated_number = 0
    @inputed_number = 0
    @candidate_number = 0

  to_string: ->
    return 'result:' + @calculated_number + "\n" + 'input:' + @inputed_number + "\n" + 'temp:' + @candidate_number

  module.exports = Calculator
