
class Env {
	constructor(){
		this.size = min(W,H)/40;
	}
}

class Unit extends Env {
	constructor(x,y,val,col) {
		super()
		this.x = x;
		this.y = y;
		this.val = val;
		this.col = col;
	}
	paint(){
		fill(this.col)
		stroke(200,200,200);
		ellipse((this.x+0.5)*this.size,(this.y+0.5)*this.size,this.size*0.9,this.size*0.9);
	}
	alive() {
		return true
	}
}

class Cell extends Unit {
	constructor(x,y,v){
		super(x,y,color(10,10,10));
		this.val = v;
		this.cols = {alive: color(30,30,30), dead: color(250,250,250)};
		this.col = lerpColor(this.cols.dead,this.cols.alive,this.val)
	}
	updateVal(v){
		this.val = v;
		this.updateCol();
	}
	updateCol(){
		this.col = lerpColor(this.cols.dead,this.cols.alive,this.val)
	}
	toggle(){
		this.val = 1-this.val;
		this.updateCol();
	}
	alive() {
		return this.val >= 0.5
	}
}


class BoolCell extends Cell {
	constructor(x,y,a) {
		var val = 0;
		if (a) {val = 1;}
		super(x,y,val)
	}
	
	alive() {
		return this.val
	}
}


class Structure {
	constructor(W,H,CellType) {
		this.w = W;
		this.h = H;
		this.celltype = CellType;
		this.grid_data = [];
		for (var i=0; i<this.w; i+=1){
			this.grid_data.push([])
			for (var j=0; j<this.h; j+=1){
				if (this.celltype=="Bool"){
					this.grid_data[i].push(new BoolCell(i,j,false))
				} else if (this.celltype=="Cont"){
					this.grid_data[i].push(new Cell(i,j,0))
				}
			}
		}
	}
	
	validRange(X,Y) {
		var x = X; var y = Y
		if (x<0) {x=this.w+x}
		if (x>=this.w) {x=x-this.w}
		if (y<0) {y=this.h+y}
		if (y>=this.h) {y=y-this.h}
		return [x,y]
	}
	
	getAlive(X,Y) {
		var r = this.validRange(X,Y)
		var x = r[0]; var y = r[1]
		return this.grid_data[x][y].alive();
	}
	
	getState(X,Y) {
		var r = this.validRange(X,Y)
		var x = r[0]; var y = r[1]
		return this.grid_data[x][y].val;
	}
	
	setState(X,Y,v){
		var r = this.validRange(X,Y)
		var x = r[0]; var y = r[1]
		this.grid_data[x][y].updateVal(v);
	}
	
	toggleState(X,Y) {
		this.grid_data[X][Y].toggle();
	}
	
	sumNeighbours(X,Y) {
		var total = 0;
		for (var i=-1; i<=1; i+=1){
			for (var j=-1; j<=1; j+=1){
				if (!(i==0 && j==0)) {total+=this.getState(X+i,Y+j)}
			}
		}
		return total
	}
	
	paintAll(){
		background(220,220,220);
		for (var i=0; i<this.w; i+=1){
			for (var j=0; j<this.h; j+=1){
				this.grid_data[i][j].paint();
			}
		}
	}
	
	copyGrid(){
		return this.grid_data;
	}
	
	embedStructure(X,Y,structure){
		for (var i=0; i<structure.w; i+=1){
			for (var j=0; j<structure.h; j+=1){
				var r = this.validRange(X+i,Y+j)
				var x = r[0]; var y = r[1]
				this.setState(x,y,structure.getState(i,j))
			}
		}
	}
}

class Grid extends Structure {
	constructor(N,CellType) {
		super(N,N,CellType)
		this.n = N
	}
	
	simulate() {
		this.paintAll();
		return this
	}
}