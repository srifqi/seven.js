/**
	seven.js
	Seven Segment Display library
	@author srifqi
*/
var SEVEN = SEVEN || { REVISION: "5" };

/**
	@author srifqi
	http://en.wikipedia.org/wiki/Seven-segment_display_character_representations
*/
SEVEN.Data = {
//	still not complete
/*	 __a__
	|     |
	f     b
	|__g__|
	|     |
	e     c
	|__d__|		*/
//	'char':[a,b,c,d,e,f,g],
	'0':[1,1,1,1,1,1,0],
	'1':[0,1,1,0,0,0,0],
	'2':[1,1,0,1,1,0,1],
	'3':[1,1,1,1,0,0,1],
	'4':[0,1,1,0,0,1,1],
	'5':[1,0,1,1,0,1,1],
	'6':[1,0,1,1,1,1,1],
	'7':[1,1,1,0,0,0,0],
	'8':[1,1,1,1,1,1,1],
	'9':[1,1,1,1,0,1,1],
	'a':[1,1,1,1,1,0,1],
	'b':[0,0,1,1,1,1,1],
	'c':[0,0,0,1,1,0,1],
	'd':[0,1,1,1,1,0,1],
	'e':[1,1,0,1,1,1,1],
	'f':[1,0,0,0,1,1,1], //same as capital F
	'g':[1,1,1,1,0,1,1], //same as 9
	'h':[0,0,1,0,1,1,1],
	'i':[0,0,0,0,1,0,0],
	'j':[0,1,1,1,0,0,0], //same as capital J
	'k':[0,1,0,1,1,1,1], //same as capital K
	'l':[0,0,0,0,1,1,0],
	'm':[1,0,1,0,1,0,1], //same as capital M
	'n':[0,0,1,0,1,0,1],
	'o':[0,0,1,1,1,0,1],
	'p':[1,1,0,0,1,1,1], //same as capital P
	'q':[1,1,1,0,0,1,1], //same as capital Q
	'r':[0,0,0,0,1,0,1], //same as capital R
	's':[1,0,1,1,0,1,1], //same as 5 also capital S
	't':[0,0,0,1,1,1,1], //same as capital T
	'u':[0,0,1,1,1,0,0],
	'v':[0,1,0,1,0,1,0], //same capital V
	'w':[1,0,1,1,1,0,0], //hard to define!!!
	'x':[0,1,0,0,1,0,1], //hard to define!!!
	'y':[0,1,1,1,0,1,1], //same as capital Y
	'z':[1,1,0,1,1,0,0], //hard to define!!!
	'A':[1,1,1,0,1,1,1],
	'B':[1,1,1,1,1,1,1], //same as 8
	'C':[1,0,0,1,1,1,0],
	'D':[1,1,1,1,1,1,0], //same as 0
	'E':[1,0,0,1,1,1,1],
	'F':[1,0,0,0,1,1,1], //same as lower case f
	'G':[1,0,1,1,1,1,1],
	'H':[0,1,1,0,1,1,1],
	'I':[0,1,1,0,0,0,0], //push l to the right
	'J':[0,1,1,1,0,0,0], //same as lower case j
	'K':[0,1,0,1,1,1,1], //same as lower case k
	'L':[0,0,0,1,1,1,0],
	'M':[1,0,1,0,1,0,1], //same as lower case m
	'N':[1,1,1,0,1,1,0],
	'O':[1,1,1,1,1,1,0], //same as 0
//	'o':[0,0,1,1,1,0,1], //same as lower case o
	'P':[1,1,0,0,1,1,1], //same as lower case p
	'Q':[1,1,1,0,0,1,1], //same as lower case q
	'R':[0,0,0,0,1,0,1], //same as lower case r
//	'R':[1,1,1,0,1,1,1], //same as capital A
	'S':[1,0,1,1,0,1,1], //same as 5 also lower case s
	'T':[0,0,0,1,1,1,1], //same as lower case t,
	'U':[0,1,1,1,1,1,0],
	'V':[0,1,0,1,0,1,0], //same as lower case v
	'W':[1,0,1,1,1,0,0], //hard to define!!!
	'X':[0,1,0,0,1,0,1], //hard to define!!!
	'Y':[0,1,1,1,0,1,1], //same as lower case Y
	'Z':[1,1,0,1,1,0,0], //hard to define!!!
	' ':[0,0,0,0,0,0,0]
};

/**
	@author srifqi
*/
SEVEN.Letter = function(character,readable) {
	if((character === "" || character === undefined) && this.characterData === undefined) {
		console.error("SEVEN.Letter: Empty input");
		this.character = " ";
		this.characterData = [0,0,0,0,0,0,0];
	}
	
	if(character.length>1) {
		console.log("Please don't use SEVEN.Letter for many characters. Use SEVEN.Word instead");
		return new SEVEN.Word(character);
	}
	
	this.character = character;
	this.characterData = SEVEN.Data[character];
	
	this.id = SEVEN.LetterIdCount++;
	this.name = "";
	
	//some warning
	if(
		character === "k" || character === "m" || character === "v" ||
		character === "w" || character === "x" || character === "z" ||
		character === "K" || character === "M" || character === "V" ||
		character === "W" || character === "X" || character === "Z" ||
		character === "N"
	) {
		console.warn("SEVEN.Letter: the character " + character + " (id:" + this.id + ") hard to read letter");
	} else if(
		character === "g" || character === "s" || character === "B" ||
		character === "D" || character === "G" || character === "O" ||
		character === "S"
	) {
		console.warn("SEVEN.Letter: the character " + character + " (id:" + this.id + ") will rendered as number");
	}
};

SEVEN.Letter.prototype = {
	constructor: SEVEN.Letter,
	
	update: function() {
		if(SEVEN.Data[this.character]===undefined) {
			console.error("SEVEN.Letter: the character " + character + " (id:" + this.id + ") can't be constructed");
			this.characterData = [0,0,0,0,0,0,0];
		} else {
			this.characterData = SEVEN.Data[this.character];
		}
	},
	
	setCharacter: function(character) {
		this.character = character;
		this.update();
	},
	
	getText: function (){
		var text = " ";
		text+=(this.characterData[0]===1) ? "___ \n" : "    \n"; //a
		text+=(this.characterData[5]===1) ? "|"      : " "    ; //f
		text+="   "; //spacer
		text+=(this.characterData[1]===1) ? "|\n"    : " \n"  ; //b
		text+=(this.characterData[5]===1) ? "|"      : " "    ; //f
		text+=(this.characterData[6]===1) ? "___"    : "   "  ; //g
		text+=(this.characterData[1]===1) ? "|\n"    : " \n"  ; //b
		text+=(this.characterData[4]===1) ? "|"      : " "    ; //e
		text+="   "; //spacer
		text+=(this.characterData[2]===1) ? "|\n"    : " \n"  ; //c
		text+=(this.characterData[4]===1) ? "|"      : " "    ; //e
		text+=(this.characterData[3]===1) ? "___"    : "   "  ; //d
		text+=(this.characterData[2]===1) ? "|\n"    : " \n"  ; //c
		return text;
	},
	
	getHTML: function (usePre,displayStyle){
		var usePre = usePre || 1;
		var diplayStyle = displayStyle || "block";
		function s(n){var y="";for(i=0;i<n;i++){y+="&nbsp;";}return y;}
		var _text = (usePre===1) ? "<pre style='font-family: monospace;display:" + displayStyle + ";'>" : "";
		_text += s(1);
		_text+=(this.characterData[0]===1) ? "___" + s(1) + "<br/>" : s(4) + "<br/>"; //a
		_text+=(this.characterData[5]===1) ? "|"                    : s(1)          ; //f
		_text+=s(3); //spacer
		_text+=(this.characterData[1]===1) ? "|<br/>"               : s(1) + "<br/>"; //b
		_text+=(this.characterData[5]===1) ? "|"                    : s(1)          ; //f
		_text+=(this.characterData[6]===1) ? "___"                  : s(3)          ; //g
		_text+=(this.characterData[1]===1) ? "|<br/>"               : s(1) + "<br/>"; //b
		_text+=(this.characterData[4]===1) ? "|"                    : s(1)          ; //e
		_text+=s(3); //spacer
		_text+=(this.characterData[2]===1) ? "|<br/>"               : s(1) + "<br/>"; //c
		_text+=(this.characterData[4]===1) ? "|"                    : s(1)          ; //e
		_text+=(this.characterData[3]===1) ? "___"                  : s(3)          ; //d
		_text+=(this.characterData[2]===1) ? "|<br/>"               : s(1) + "<br/>"; //c
		_text+= (usePre===1) ? "</pre>" : "";
		return _text;
	}
};

SEVEN.LetterIdCount = 0;

/**
	@author srifqi
*/
SEVEN.Word = function(word) {
	this.id = SEVEN.WordIdCount++;
	this.name = "";
	this.word = word;
	this.letter = [];
	this.update();
};

SEVEN.Word.prototype = {
	constuctor: SEVEN.Word,
	
	update: function() {
		var word = String(this.word);
		for(i=0;i<word.length;i++) {
			this.letter.push(new SEVEN.Letter(word[i]));
		}
	},
	
	set: function(word) {
		this.word = word || " ";
		this.update();
	},
	
	getText: function() {
		var _text = [[],[],[],[],[]],i=p=0;
		for(var u=0;u<this.letter.length;u++) {
			var letterU = this.letter[u].characterData;
			function s(n){var y="";for(i=0;i<n;i++){y+=" ";}return y;}
			_text[0].push(
				s(1) +
				((letterU[0]===1) ? "___" + s(1) : s(4)) //a
			);
			_text[1].push(
				((letterU[5]===1) ? "|" : s(1)) + //f
				s(3) +
				((letterU[1]===1) ? "|" : s(1)) //b
			);
			_text[2].push(
				((letterU[5]===1) ? "|" : s(1)) + //f
				((letterU[6]===1) ? "___" : s(3)) + //g
				((letterU[1]===1) ? "|" : s(1)) //b
			);
			_text[3].push(
				((letterU[4]===1) ? "|" : s(1)) + //e
				s(3) +
				((letterU[2]===1) ? "|" : s(1)) //c
			);
			_text[4].push(		
				((letterU[4]===1) ? "|" : s(1)) + //e
				((letterU[3]===1) ? "___" : s(3)) + //d
				((letterU[2]===1) ? "|" : s(1)) //c
			);
		}
		for(var p=0;p<5;p++) {
			_text[p].push("\n");
		}
		
		var text = "";
		for(var i=0;i<5;i++) {
			text += _text[i].join(" ");
		}
		return text;
	},
	
	getHTML: function() {
		var _text = [[],[],[],[],[]],i=u=r=p=0;
		for(var u=0;u<this.letter.length;u++) {
			function s(n){var y="";for(i=0;i<n;i++){y+="&nbsp;";}return y;}
			var letterU = this.letter[u].characterData;
			_text[0].push(
				s(1) +
				((letterU[0]===1) ? "___" + s(1) : s(4)) //a
			);
			_text[1].push(
				((letterU[5]===1) ? "|" : s(1)) + //f
				s(3) +
				((letterU[1]===1) ? "|" : s(1)) //b
			);
			_text[2].push(
				((letterU[5]===1) ? "|" : s(1)) + //f
				((letterU[6]===1) ? "___" : s(3)) + //g
				((letterU[1]===1) ? "|" : s(1)) //b
			);
			_text[3].push(
				((letterU[4]===1) ? "|" : s(1)) + //e
				s(3) +
				((letterU[2]===1) ? "|" : s(1)) //c
			);
			_text[4].push(
				((letterU[4]===1) ? "|" : s(1)) + //e
				((letterU[3]===1) ? "___" : s(3)) + //d
				((letterU[2]===1) ? "|" : s(1)) //c
			);
		}
		for(var r=0;r<5;r++) {
			_text[r].push("<br/>");
		}
		
		var text = "<pre style='font-family: monospace;'>";
		for(var i=0;i<5;i++) {
			text += _text[i].join("&nbsp;");
		}
		return text + "</pre>";
	}
};

SEVEN.WordIdCount = 0;

/**
	@author srifqi
*/
SEVEN.Color = function(r,g,b) {
	this.r = r;
	this.g = g;
	this.b = b;
	this.update();
};

SEVEN.Color.prototype = {
	constructor: SEVEN.Color,
	
	update: function() {
		this.rgbText = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
	},
	
	set: function(r,g,b) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.update();
	}
};

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

/**
	* @author srifqi
	* 
	* param: {
	*	scale	: <number>
	*	color	: <SEVEN.Color>
	*	svg		: <SVG DOM Element>
	* }
*/
SEVEN.SVGRenderer = function(param) {
	console.log("SEVEN.SVGRenderer",SEVEN.REVISION);
	
	var param = param || {};
	
	this.autoClear = true;
	this.scale = param.scale || 12;
	this.color = param.color || new SEVEN.Color(255,0,0);
	this.domElement =	(param.svg!==undefined) ?
						param.svg : document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	
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
		while(this.domElement.childNodes.length > 0){
			this.domElement.removeChild(this.domElement.childNodes[0]);
		}
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
			_svg = this.domElement,
			_scale = this.scale,
			_svgNode, _svgPathPool = [],
			_pathCount = 0;
		
		var twoScale = 2 * _scale,
			triScale = 3 * _scale;
		
		function drawH(x,y) {
			drawRect(x * _scale,y * _scale,twoScale,_scale);
		}
		
		function drawV(x,y) {
			drawRect(x * _scale,y * _scale,_scale,triScale);
		}
		
		function drawRect(x,y,w,h) {
			drawFace4(x, y, x + w, y, x + w, y + h, x, y + h);
		}
		
		function drawFace4(x1,y1,x2,y2,x3,y3,x4,y4) {
			_svgNode = getPathNode(_pathCount++);
			_svgNode.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 + ' L ' + x3 + ',' + y3 + ' L ' + x4 + ',' + y4 + ' z');
			_svgNode.setAttribute('style','fill:' + _color.rgbText + ';');
			
			_svg.appendChild(_svgNode);
		}
		
		function getPathNode(id) {
			if(_svgPathPool[id] == null){
				_svgPathPool[id] = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				return _svgPathPool[id];
			}
			return _svgPathPool[id];
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
