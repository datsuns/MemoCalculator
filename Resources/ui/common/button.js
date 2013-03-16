var Button;

Button = (function() {

  function Button(title, top, left, height, width) {
    if (height == null) {
      height = '15%';
    }
    if (width == null) {
      width = '20%';
    }
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
