let width = 600;
let height = 400;

let face_color = "#FFF0E3";
let face_width = 160;
let face_height = 180;

let hair_color = "#040912";
let brow_color = "#040912";
let lip_color = "#B34355";
let blur_color = "#FDC1B0";
let cloth_color = "#FCC5B6";
let kara_color = "#E8B9AC";

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(255);
	// 얼굴
	noStroke();
	fill(face_color);
	ellipse(width / 2, height / 2, face_width, face_height);

	// 헤어
	fill(hair_color);

	// 왼쪽 머리
	beginShape();
	vertex(305.037, 117);
	bezierVertex(305.037, 117, 295.436, 179.867, 227, 181.38);
	vertex(223.475, 180.843);
	bezierVertex(212, 289.5, 299, 290, 299, 290);
	vertex(298.934, 289.504);
	bezierVertex(298.934, 289.504, 195, 447.5, 133.934, 311.504);
	vertex(133.115, 311.685);
	bezierVertex(126.595, 263.978, 169.183, 245.013, 169.183, 245.013);
	vertex(169.165, 246.187);
	bezierVertex(165.01, 212.32, 194.069, 199.115, 194.069, 199.115);
	vertex(193.334, 200.372);
	bezierVertex(208, 62.5, 299.334, 105.372, 299.334, 105.372);
	endShape(CLOSE);

	// 오른쪽 머리
	beginShape();
	vertex(294.963, 117);
	bezierVertex(294.963, 117, 304.564, 179.867, 373, 181.38);
	vertex(376.525, 180.843);
	bezierVertex(388, 289.5, 301, 290, 301, 290);
	vertex(301.066, 289.504);
	bezierVertex(301.066, 289.504, 405, 447.5, 466.066, 311.504);
	vertex(466.885, 311.685);
	bezierVertex(473.405, 263.978, 430.817, 245.013, 430.817, 245.013);
	vertex(430.835, 246.187);
	bezierVertex(434.99, 212.32, 405.931, 199.115, 405.931, 199.115);
	vertex(406.666, 200.372);
	bezierVertex(392, 62.5, 300.666, 105.372, 300.666, 105.372);
	endShape(CLOSE);

	// 눈썹
	fill(brow_color);
	ellipse(269, 186, 18, 6);
	ellipse(331, 186, 18, 6);

	// 블러
	fill(blur_color);
	noStroke();
	ellipse(250, 231, 25, 20);
	ellipse(350, 231, 25, 20);

	// 눈
	stroke(0);
	strokeWeight(1.5);
	noFill();
	arc(269, 211, 30, 20, PI, TWO_PI);
	arc(331, 211, 30, 20, PI, TWO_PI);

	// 눈알
	noStroke();
	fill(0);
	circle(269, 212, 20);
	circle(331, 212, 20);

	fill(255);
	arc(269, 210, 14, 8, PI, TWO_PI);
	circle(267, 211, 3);
	arc(331, 210, 14, 8, PI, TWO_PI);
	circle(333, 211, 3);

	// 코
	stroke(0);
	strokeWeight(1);
	noFill();
	arc(300, 238, 6, 3, 0, PI);

	// 입술
	noStroke();
	fill(lip_color);
	ellipse(300, 258, 10, 8);

	// 옷
	noStroke();
	fill(cloth_color);
	arc(300, 400, 200, 200, PI, TWO_PI);

	// 목
	fill(face_color);
	rect(285, 287, 30, 30);

	fill(kara_color);
	triangle(285, 293, 300, 320, 273, 316);
	triangle(315, 293, 327, 316, 300, 320);
	rect(296, 318, 8, 10);

	// 삔
	fill(kara_color);
	push();
	translate(258, 127);
	rotate(radians(55));
	rect(0, 0, 16, 4);
	rect(0, 6, 16, 4);
	pop();
}
