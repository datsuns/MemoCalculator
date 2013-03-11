vows = require 'vows'
assert = require 'assert'
Calculator = require '../../../coffee/ui/common/calculator'

vows.describe('calculator test')
  .addBatch
    'default state':
      topic: -> new Calculator()

      'has no reseult': (topic) ->
        assert.equal topic.result(), 0

      'has no input': (topic) ->
        assert.equal topic.get_input(), 0

  .addBatch
    'once 1 pushed':
      topic: ->
        c = new Calculator()
        c.push(1)
        return c

      'has 1 input value': (topic) ->
        assert.equal topic.get_input(), 1

      'has no reseult': (topic) ->
        assert.equal topic.result(), 0

      'has no memoried': (topic) ->
        assert.equal topic.memoried(), 0

  .addBatch
    'once 1 pushed and update':
      topic: ->
        c = new Calculator()
        c.push(1)
        c.update()
        return c

      'has no input value': (topic) ->
        assert.equal topic.get_input(), 0

      'has no result value': (topic) ->
        assert.equal topic.result(), 0

  .addBatch
    '1 pushed and add':
      topic: ->
        c = new Calculator()
        c.push(1)
        c.add()
        return c

      'add and get 1': (topic) ->
        assert.equal topic.result(), 1

      'after add keep input': (topic) ->
        assert.equal topic.get_input(), 1

      'after cleared get result 0': (topic) ->
        topic.clear()
        assert.equal topic.result(), 0

  .addBatch
    '1 and 2 pushed':
      topic: ->
        c = new Calculator()
        c.push(1)
        c.push(2)
        return c

      'get input 12': (topic) ->
        assert.equal topic.get_input(), 12

  .addBatch
    'plus 1 and 2':
      topic: ->
        c = new Calculator()
        c.push(1)
        c.update()
        c.push(2)
        c.add()
        return c

      'get result 3': (topic) ->
        assert.equal topic.result(), 3

      'get input 2': (topic) ->
        assert.equal topic.get_input(), 2

  .addBatch
    'multiple 2 and 3':
      topic: ->
        c = new Calculator()
        c.push(2)
        c.update()
        c.push(3)
        c.multi()
        return c

      'get result 6': (topic) ->
        assert.equal topic.result(), 6

  .addBatch
    'minus 5 and 8':
      topic: ->
        c = new Calculator()
        c.push(5)
        c.update()
        c.push(8)
        c.minus()
        return c

      'get result -3': (topic) ->
        assert.equal topic.result(), -3

  .addBatch
    'divide 6 by 3':
      topic: ->
        c = new Calculator()
        c.push(6)
        c.update()
        c.push(3)
        c.divide()
        return c

      'get result 2': (topic) ->
        assert.equal topic.result(), 2

  .export(module)
