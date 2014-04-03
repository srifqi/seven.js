seven.js
========

Seven Segment Display Library

This will help you to generate seven segment display (alphanumeric) using text, HTML text, or render it with Canvas or SVG Renderer

##How to Use
```HTML
<html>
	<head>
		<title>seven_segment_display</title>
	</head>
	<body>
		<canvas id="t"></canvas>
		<script src="seven.min.js"></script>
		<script>
		var renderer = new SEVEN.CanvasRenderer({canvas:document.getElementById("t")});
		document.body.appendChild(renderer.domElement);
		
		window.onload = function render() {
		var tex = new SEVEN.Word("08198733523");
		renderer.setSize(window.innerWidth,window.innerHeight);
		renderer.color = new SEVEN.Color(255,60,60);
		renderer.render(tex);
		}
		</script>
	</body>
</html>
```

##Changelog
r5
- initial commit
- fix some bugs
- improve seven segment display data
