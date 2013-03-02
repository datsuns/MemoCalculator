//FirstView Component Constructor
function CreateDefaultButton( text, top, left ){
	var button = Ti.UI.createButton({
		title: text,
		color: '#000',
		height: 'auto',
		width: 'auto'
	});
	button.setTop( top )
	button.setLeft( left )
	return button;	
}

function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var buttons = [
		CreateDefaultButton('1', 50,  10),
		CreateDefaultButton('2', 50,  50),
		CreateDefaultButton('3', 50,  90),
		CreateDefaultButton('4', 100, 10),
		CreateDefaultButton('5', 100, 50),
		CreateDefaultButton('6', 100, 90),
		]
	for( var i = 0; i < buttons.length; i++){
		self.add(buttons[i])
	}

	var num = 0;
	buttons[1].addEventListener('click',function(e){
		label.setText( 'clicked: ' + num++ )
	});


	return self;
}

module.exports = FirstView;
