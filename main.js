var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = 75;
var height = 100;
var greencar_X =5;
var greencar_Y =225
var background_imgTag = "parkingLot.jpg";
var greencar_imgTag = "car2.png";
var novo_fundo,novo_carro;

function add() {
	novo_fundo = new Image();
	novo_fundo.onload = uploadBackground;
	novo_fundo.src = background_imgTag;

	novo_carro = new Image();
	novo_fundo.onload = uploadGreenCar;
	novo_carro.src = greencar_imgTag;
}

function uploadBackground() {
	ctx.drawImage(novo_fundo, 0,0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(novo_carro, greencar_X, greencar_Y, width, height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if(greencar_Y>=0){
		greencar_Y=greencar_Y-10;
		console.log("when up arrow is pressed, x = "+ greencar_X + "| y="+ greencar_Y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down(){
	if(greencar_Y<=400){
		greencar_Y=greencar_Y+10;
		console.log("when  arrow is pressed, x = "+ greencar_X + "| y="+ greencar_Y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left(){
	if(greencar_X>=0){
		greencar_X=greencar_X-10;
		console.log("when left arrow is pressed, x = " + greencar_X + "| y="+ greencar_Y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right(){
	if(greencar_X<=800){
		greencar_X=greencar_X+10;
		console.log("when left arrow is pressed, x = " + greencar_X + "| y="+ greencar_Y);
		uploadBackground();
		uploadGreenCar();
	}
}
