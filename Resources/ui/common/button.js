var Button;

Button = (function() {

  function Button(title, top, left, height, width) {
    this.button = Ti.UI.createButton({
      title: title,
      color: '#000',
      top: top,
      left: left,
      height: height,
      width: width
    });
    return this.button;
  }

  module.exports = Button;

  return Button;

})();
