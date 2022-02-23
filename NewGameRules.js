
class NewGameRules extends Grid {
	constructor(N){
		super(N,"Cont")
		this.timestep = 0;
	}
	
	simulate(){
		var newState = new NewGameRules(this.n);
		for (var i=0; i<this.w; i+=1) {
			for (var j=0; j<this.h; j+=1) {
				newState.setState(i,j,this.getState(i,j))
				if (this.getAlive(i,j) && this.sumNeighbours(i,j)<1.8){newState.setState(i,j,(1+this.getState(i,j))/2)}
				if (this.getAlive(i,j) && this.sumNeighbours(i,j)>2.5){newState.setState(i,j,this.getState(i,j)/2)}
// 				if (!this.getAlive(i,j) && this.sumNeighbours(i,j)==3){newState.setState(i,j,2*this.getState(i,j))}
/*
				if (this.getAlive(i,j)){newState.setState(i,j,(1+this.getState(i,j))/2)}
				if (this.getAlive(i,j) && this.sumNeighbours(i,j)>3){newState.setState(i,j,this.getState(i,j)/2)}
*/
					
			}
		}
		newState.paintAll();
		newState.timestep = this.timestep+1;
		return newState
	}
}

class Fade extends Structure {
	constructor(){
		super(3,3,"Cont")
		this.setState(0,0,0.7);
		this.setState(0,1,0.6);
		this.setState(0,2,0.4);
		this.setState(1,0,0.3);
		this.setState(1,1,0.5);
		this.setState(1,2,0.2);
		this.setState(2,0,0.7);
		this.setState(2,1,0.8);
		this.setState(2,2,0.4);
/*
		this.setState(0,0,0.49);
		this.setState(0,1,0.49);
		this.setState(1,0,0.49);
		this.setState(1,1,0.49);
*/
	}
}

class GliderCont extends Structure {
	constructor(){
		super(3,3,"Cont")
		this.setState(0,2,0.9);
		this.setState(1,2,0.8);
		this.setState(2,2,0.9);
		this.setState(2,1,0.8);
		this.setState(1,0,0.9);
	}
}
