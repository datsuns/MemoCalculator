var inputed_number = 0
var calculated_number = 0
var operation = Nothing

function Nothing( a, b ){
	return a
}

function Plus( a, b ){
	return a + b
}

function Minus( a, b ){
	return a - b
}

function Multiple( a, b ){
	return a * b
}

function Divide( a, b ){
	if( b == 0 ){
		return 0
	}
	return a / b
}

function CreateButton( text, top, left ){
	var button = Ti.UI.createButton({
		title: text,
		color: '#000',
		height: '15%',
		width: '15%'
	});
	button.setTop( top )
	button.setLeft( left )
	return button
}


//FirstView Component Constructor
function CreateNumberButton( text, top, left, output ){
	var button = CreateButton( text, top, left )

	button.addEventListener('click',function(e){
		inputed_number *= 10
		inputed_number += Number(text)
		output.setText( inputed_number )
	});
	return button;	
}

function UpdateNumbers(){
	if( calculated_number == 0 ){
		calculated_number = inputed_number
	}
	inputed_number = 0
}

function CreateFunctionButton( text, top, left, output ){
	var button = CreateButton( text, top, left )
	if( text == '+' ){
		button.addEventListener('click',function(e){
			UpdateNumbers()
			operation = Plus
		});
	}
	if( text == '-' ){
		button.addEventListener('click',function(e){
			UpdateNumbers()
			operation = Minus
		});
	}
	if( text == '*' ){
		button.addEventListener('click',function(e){
			UpdateNumbers()
			operation = Multiple
		});
	}
	if( text == '/' ){
		button.addEventListener('click',function(e){
			UpdateNumbers()
			operation = Divide
		});
	}
	if( text == '=' ){
		button.addEventListener('click',function(e){
			calculated_number = operation( calculated_number, inputed_number )
			output.setText( calculated_number )
			operation = Nothing
		});
	}
	if( text == 'c' ){
		button.addEventListener('click',function(e){
			inputed_number = 0
			calculated_number = 0
			output.setText( calculated_number )
		});
	}
	if( text == 'debug' ){
		button.addEventListener('click',function(e){
			var msg = 'calculated_number: ' + calculated_number + "\n" +
								'inputed_number: ' + inputed_number + "\n" +
			alert( msg )
		});
	}
	return button
}


function AddKeyButtons( parent, output ){
	var buttons = [
		CreateNumberButton('7', '10%',  '0%', output),
		CreateNumberButton('8', '10%',  '15%', output),
		CreateNumberButton('9', '10%',  '30%', output),
		CreateFunctionButton('/', '10%',  '45%', output),

		CreateNumberButton('4', '25%', '0%', output),
		CreateNumberButton('5', '25%', '15%', output),
		CreateNumberButton('6', '25%', '30%', output),
		CreateFunctionButton('*', '25%', '45%', output),

		CreateNumberButton('1', '40%', '0%', output),
		CreateNumberButton('2', '40%', '15%', output),
		CreateNumberButton('3', '40%', '30%', output),
		CreateFunctionButton('-', '40%', '45%', output),

		CreateNumberButton('0', '55%', '0%', output),
		CreateFunctionButton('.', '55%', '15%', output),
		CreateFunctionButton('=', '55%', '30%', output),
		CreateFunctionButton('+', '55%', '45%', output),

		CreateFunctionButton('c', '70%', '0%', output),
		CreateFunctionButton('debug', '70%', '15%', output),
	]

	for( var i = 0; i < buttons.length; i++){
		parent.add(buttons[i])
	}

//buttons[1].addEventListener('click',function(e){
//output.setText( 'clicked: ' + num++ )
//});

}

function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'0',
		height:'10%',
		width:'50%',
		top:0,
		left:0,
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
	});
	self.add(label);

	AddKeyButtons( self, label )

	var text_input = Ti.UI.createTextArea({
		top:'85%',
		left:0,
		height:'15%',
		width:'50%',
	})
	self.add(text_input)
	

	return self;
}

module.exports = FirstView;

