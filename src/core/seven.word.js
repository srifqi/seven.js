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
