Button = require 'ui/common/button'

class AppMain
  constructor: ->
    b = new Button( 'hello', 0, 100, 100, 100)

  create_main_view: ->
    self = Ti.UI.createView()


  module.exports = AppMain
