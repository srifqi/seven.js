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
