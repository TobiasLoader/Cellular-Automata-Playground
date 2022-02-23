
class GameOfLife extends Grid {
	constructor(N){
		super(N,"Bool")
		this.timestep = 0;
	}
	
	simulate(){
		var newState = new GameOfLife(this.n);
		for (var i=0; i<this.w; i+=1) {
			for (var j=0; j<this.h; j+=1) {
				newState.setState(i,j,this.getState(i,j))
				if (this.getState(i,j) && this.sumNeighbours(i,j)<2){newState.setState(i,j,false)}
				if (this.getState(i,j) && this.sumNeighbours(i,j)>3){newState.setState(i,j,false)}
				if (!this.getState(i,j) && this.sumNeighbours(i,j)==3){newState.setState(i,j,true)}
				
			}
		}
		newState.paintAll();
		newState.timestep = this.timestep+1;
		return newState
	}
}


// Still lifes

class Block extends Structure {
	constructor(){
		super(2,2,"Bool")
		this.setState(0,0,true);
		this.setState(0,1,true);
		this.setState(1,0,true);
		this.setState(1,1,true);
	}
}
class BeeHive extends Structure {
	constructor(){
		super(4,3,"Bool")
		this.setState(0,1,true);
		this.setState(1,0,true);
		this.setState(2,0,true);
		this.setState(3,1,true);
		this.setState(1,2,true);
		this.setState(2,2,true);
	}
}
class Loaf extends Structure {
	constructor(){
		super(4,4,"Bool")
		this.setState(1,0,true);
		this.setState(2,0,true);
		this.setState(0,1,true);
		this.setState(3,1,true);
		this.setState(1,2,true);
		this.setState(3,2,true);
		this.setState(2,3,true);
	}
}
class Boat extends Structure {
	constructor(){
		super(3,3,"Bool")
		this.setState(0,0,true);
		this.setState(1,0,true);
		this.setState(0,1,true);
		this.setState(2,1,true);
		this.setState(1,2,true);
	}
}
class Tub extends Structure {
	constructor(){
		super(3,3,"Bool")
		this.setState(1,0,true);
		this.setState(0,1,true);
		this.setState(2,1,true);
		this.setState(1,2,true);
	}
}


// Oscillators

class Blinker extends Structure {
	constructor(){
		super(3,3,"Bool")
		this.setState(0,1,true);
		this.setState(1,1,true);
		this.setState(2,1,true);
	}
}
class Toad extends Structure {
	constructor(){
		super(4,4,"Bool")
		this.setState(1,1,true);
		this.setState(2,1,true);
		this.setState(3,1,true);
		this.setState(0,2,true);
		this.setState(1,2,true);
		this.setState(2,2,true);
	}
}
class Beacon extends Structure {
	constructor(){
		super(4,4,"Bool")
		this.setState(0,0,true);
		this.setState(0,1,true);
		this.setState(1,0,true);
		this.setState(3,3,true);
		this.setState(3,2,true);
		this.setState(2,3,true);
	}
}
class Pulsar extends Structure {
	constructor(){
		super(15,15,"Bool")
		this.setState(3,1,true);
		this.setState(4,1,true);
		this.setState(5,1,true);
		this.setState(9,1,true);
		this.setState(10,1,true);
		this.setState(11,1,true);
		
		this.setState(1,3,true);
		this.setState(1,4,true);
		this.setState(1,5,true);
		this.setState(1,9,true);
		this.setState(1,10,true);
		this.setState(1,11,true);
		
		this.setState(13,3,true);
		this.setState(13,4,true);
		this.setState(13,5,true);
		this.setState(13,9,true);
		this.setState(13,10,true);
		this.setState(13,11,true);
		
		this.setState(3,13,true);
		this.setState(4,13,true);
		this.setState(5,13,true);
		this.setState(9,13,true);
		this.setState(10,13,true);
		this.setState(11,13,true);
		
		this.setState(6,3,true);
		this.setState(6,4,true);
		this.setState(6,5,true);
		this.setState(6,9,true);
		this.setState(6,10,true);
		this.setState(6,11,true);
		
		this.setState(8,3,true);
		this.setState(8,4,true);
		this.setState(8,5,true);
		this.setState(8,9,true);
		this.setState(8,10,true);
		this.setState(8,11,true);
		
		this.setState(3,6,true);
		this.setState(4,6,true);
		this.setState(5,6,true);
		this.setState(9,6,true);
		this.setState(10,6,true);
		this.setState(11,6,true);
		
		this.setState(3,8,true);
		this.setState(4,8,true);
		this.setState(5,8,true);
		this.setState(9,8,true);
		this.setState(10,8,true);
		this.setState(11,8,true);
	}
}

class PentDecathlon extends Structure {
	constructor(){
		super(9,16,"Bool")
		this.setState(5,3,true);
		this.setState(5,4,true);
		this.setState(4,5,true);
		this.setState(6,5,true);
		this.setState(5,6,true);
		this.setState(5,7,true);
		this.setState(5,8,true);
		this.setState(5,9,true);
		this.setState(4,10,true);
		this.setState(6,10,true);
		this.setState(5,11,true);
		this.setState(5,12,true);
	}
}


// Spaceships

class Glider extends Structure {
	constructor(){
		super(3,3,"Bool")
		this.setState(0,2,true);
		this.setState(1,2,true);
		this.setState(2,2,true);
		this.setState(2,1,true);
		this.setState(1,0,true);
	}
}