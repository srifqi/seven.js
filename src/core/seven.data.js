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
