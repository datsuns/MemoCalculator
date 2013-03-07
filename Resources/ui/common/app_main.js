var AppMain, Button;

Button = require('ui/common/button');

AppMain = (function() {

  function AppMain() {
    var b;
    b = new Button('hello', 0, 100, 100, 100);
  }

  AppMain.prototype.create_main_view = function() {
    var self;
    return self = Ti.UI.createView();
  };

  module.exports = AppMain;

  return AppMain;

})();
