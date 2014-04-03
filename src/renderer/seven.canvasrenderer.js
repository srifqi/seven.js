/**
	* @author srifqi
	* 
	* param: {
	*	scale	: <number>
	*	color	: <SEVEN.Color>
	*	canvas	: <DOM Element>
	* }
*/
SEVEN.CanvasRenderer = function(param) {
	console.log("SEVEN.CanvasRenderer",SEVEN.REVISION);
	
	var param = param || {};
	
	this.autoClear = true;
	this.clearColor = new SEVEN.Color(255,255,255);
	this.scale = param.scale || 12;
	this.color = param.color || new SEVEN.Color(255,0,0);
	this.domElement = (param.canvas!==undefined) ? param.canvas : document.createElement("canvas");
	
	this.setSize = function(width,height,updateStyle){
		var _canvas = this.domElement;
		_canvas.width = width;
		_canvas.height = height;
		if(updateStyle==true) {
			_canvas.style.width = width;
			_canvas.style.height = height;
		}
	};
	
	this.clear = function () {
		var _context = this.domElement.getContext("2d");
		_context.fillStyle = this.clearColor.rgbText;
		_context.fillRect(0,0,this.domElement.width,this.domElement.height);
	};
	
	this.render = function(object) {
		if(object instanceof SEVEN.Letter === false && object instanceof SEVEN.Word === false) {
			console.error("SEVEN.CanvasRenderer.render: Object is not instance of SEVEN.Letter or SEVEN.Word");
			return false;
		}
		
		if(this.autoClear === true) {
			this.clear();
		}
		
		var _obj = object,
			_color = this.color,
			_canvas = this.domElement,
			_scale = this.scale;
		
		var twoScale = 2 * _scale,
			triScale = 3 * _scale;
		
		var _canvasContext = _canvas.getContext("2d");
		_canvasContext.fillStyle = _color.rgbText;
		
		function drawH(x,y) {
			_canvasContext.fillRect(x * _scale,y * _scale,twoScale,_scale);
		}
		
		function drawV(x,y) {
			_canvasContext.fillRect(x * _scale,y * _scale,_scale,triScale);
		}
		
		function drawLetter(character,pos) {
		/*
		v = height:3px;width:1px;
		h = height:1px;width:2px;
		a > h t:0 l:1
		b > v t:1 l:3
		c > v t:5 l:3
		d > h t:8 l:1
		e > v t:5 l:0
		f > v t:1 l:0
		g > h t:4 l:1
		 __a__
		f     b
		|__g__|
		e     c
		|__d__|		*/
			var pos = pos || 0;
			if(character[0]===1) {drawH(pos + 1,0);	} //a
			if(character[1]===1) {drawV(pos + 3,1);	} //b
			if(character[2]===1) {drawV(pos + 3,5);	} //c
			if(character[3]===1) {drawH(pos + 1,8);	} //d
			if(character[4]===1) {drawV(pos,5);		} //e
			if(character[5]===1) {drawV(pos,1);		} //f
			if(character[6]===1) {drawH(pos + 1,4);	} //g
		}
		if(_obj instanceof SEVEN.Letter === true) {
			drawLetter(_obj.letter.characterData);
		} else if(_obj instanceof SEVEN.Word === true) {
			//same as above but repeated
			var loc = 0;
			for(var i=0;i<_obj.letter.length;i++) {
				drawLetter(_obj.letter[i].characterData,loc);
				loc += 4 + Math.floor(_scale / Math.round(_scale / 2));
			}
		}
	}
};
