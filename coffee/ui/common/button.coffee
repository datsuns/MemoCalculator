class Button
  constructor:(title, top, left, height = '15%', width = '20%') ->
    @button = Ti.UI.createButton(
      title: title,
      color: '#000',
      top: top,
      left: left,
      height: height,
      width: width
    )
    return @button


  module.exports = Button
