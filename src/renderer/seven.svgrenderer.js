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
