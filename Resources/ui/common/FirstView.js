//FirstView Component Constructor
function CreateDefaultButton( text ){
	var button = Ti.UI.createButton({
		title: text,
		color: '#000',
		height: 'auto',
		width: 'auto'
	});
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
	
	var button1 = CreateDefaultButton('1')
	button1.setTop(50)
	button1.setLeft(10)
	var button2 = CreateDefaultButton('2')
	button2.setTop(50)
	button2.setLefr(50)

	self.add(button1)	
	self.add(button2)	

	var num = 0;
	button2.addEventListener('click',function(e){
		label.setText( 'clicked: ' + num++ )
	});


	return self;
}

module.exports = FirstView;
