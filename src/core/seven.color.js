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
