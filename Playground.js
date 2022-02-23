
var Automata;
var play;
var which;


function initAutomata(whichAutomaton){
	if (whichAutomaton==0){
		Automata = new GameOfLife(40);
		Automata.embedStructure(1,1,new Block())
		Automata.embedStructure(7,1,new BeeHive())
		Automata.embedStructure(14,1,new Loaf())
		Automata.embedStructure(1,6,new Boat())
		Automata.embedStructure(7,6,new Tub())
		Automata.embedStructure(14,6,new Toad())
		Automata.embedStructure(1,11,new Beacon())
		Automata.embedStructure(21,1,new Pulsar())
		Automata.embedStructure(1,18,new PentDecathlon())
		Automata.embedStructure(7,11,new Glider())
		Automata.embedStructure(15,12,new Blinker())
	} else if (whichAutomaton==1){
		Automata = new NewGameRules(40);
		Automata.embedStructure(1,1,new Fade())
		Automata.embedStructure(5,5,new GliderCont())
	}
	Automata.paintAll();
}

function setup() {
	frameRate(4)
	W = window.innerWidth;
	H = window.innerHeight;
	canvas = createCanvas(W, H);
	play = true;
	which = 0;
	
	
	initAutomata(which);	
}

function draw() {
	if (play){Automata = Automata.simulate()}
}

function mouseClicked() {
	play = !play;
	
}

window.onresize = function() {
	resizeCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight
};
