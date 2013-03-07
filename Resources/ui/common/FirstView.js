var operation = Nothing;
var Calculator = require('ui/common/Calculator');
var calculator = new Calculator();

function Nothing( operator ){
	return operator.result();
}

function Plus( operator ){
	return operator.add();
}

function Minus( operator ){
	return operator.minus();
}

function Multiple( operator ){
	return operator.multi();
}

function Divide( operator){
	return operator.divide();
}

function CreateButton( text, top, left ){
	var button = Ti.UI.createButton({
		title: text,
		color: '#000',
		height: '15%',
		width: '15%'
	});
	button.setTop( top );
	button.setLeft( left );
	return button;
}


//FirstView Component Constructor
function CreateNumberButton( text, top, left, output ){
	var button = CreateButton( text, top, left );

	button.addEventListener('click',function(e){
		calculator.push(Number(text)) ;
		output.setText( calculator.get_input() );
	});
	return button;	
}

function CreateFunctionButton( text, top, left, output ){
	var button = CreateButton( text, top, left )
	if( text == '+' ){
		button.addEventListener('click',function(e){
			calculator.update();
			operation = Plus;
		});
	}
	if( text == '-' ){
		button.addEventListener('click',function(e){
			calculator.update();
			operation = Minus;
		});
	}
	if( text == '*' ){
		button.addEventListener('click',function(e){
			calculator.update();
			operation = Multiple;
		});
	}
	if( text == '/' ){
		button.addEventListener('click',function(e){
			calculator.update();
			operation = Divide;
		});
	}
	if( text == '=' ){
		button.addEventListener('click',function(e){
      operation(calculator)
			output.setText( calculator.result() );
			operation = Nothing;
		});
	}
	if( text == 'c' ){
		button.addEventListener('click',function(e){
			calculator.clear();
			output.setText( 0 );
		});
	}
	if( text == 'debug' ){
		button.addEventListener('click',function(e){
			alert( calculator.to_string() );
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
}

function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

  var AppMain = require('ui/common/app_main');
  var app = new AppMain();
	
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

