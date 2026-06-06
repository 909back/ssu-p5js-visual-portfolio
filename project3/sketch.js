let face_color = "#FFF0E3",
	face_width = 160,
	face_height = 180;
let hair_color = "#040912",
	brow_color = "#040912",
	lip_color = "#B34355";
let blur_color = "#FDC1B0",
	cloth_color = "#FCC5B6",
	kara_color = "#E8B9AC";
let withCat = false,
	withMushroom = false,
	isSaving = false;
let catW = 60,
	catH = 55,
	mushroomW = 70,
	mushroomH = 70;
let mushroomInFace = false,
	catInFace = false;
let message = "",
	messageStartM = 0;

function isInFace(x, y) {
	return (
		((x - 300) / (face_width / 2 + 20)) ** 2 +
			((y - 200) / (face_height / 2 + 20)) ** 2 <=
		1
	);
}

function isRectInFace(x, y, w, h) {
	return (
		isInFace(x - w / 2, y - h / 2) &&
		isInFace(x + w / 2, y - h / 2) &&
		isInFace(x - w / 2, y + h / 2) &&
		isInFace(x + w / 2, y + h / 2)
	);
}

function createMessage() {
	if (!message) return;
	fill(0);
	noStroke();
	text(message, 220, 390);
	if (millis() - messageStartM >= 1000) message = "";
}

function drawHair() {
	fill(hair_color);
	beginShape();
	vertex(305, 117);
	bezierVertex(305, 117, 295, 180, 227, 181);
	vertex(223, 181);
	bezierVertex(212, 290, 299, 290, 299, 290);
	vertex(299, 290);
	bezierVertex(299, 290, 195, 448, 134, 312);
	vertex(133, 312);
	bezierVertex(127, 264, 169, 245, 169, 245);
	vertex(169, 246);
	bezierVertex(165, 212, 194, 199, 194, 199);
	vertex(193, 200);
	bezierVertex(208, 63, 299, 105, 299, 105);
	endShape(CLOSE);
	beginShape();
	vertex(295, 117);
	bezierVertex(295, 117, 305, 180, 373, 181);
	vertex(377, 181);
	bezierVertex(388, 290, 301, 290, 301, 290);
	vertex(301, 290);
	bezierVertex(301, 290, 405, 448, 466, 312);
	vertex(467, 312);
	bezierVertex(473, 264, 431, 245, 431, 245);
	vertex(431, 246);
	bezierVertex(435, 212, 406, 199, 406, 199);
	vertex(407, 200);
	bezierVertex(392, 63, 301, 105, 301, 105);
	endShape(CLOSE);
}

function createMushroom() {
	let x = mouseX,
		y = mouseY;
	fill("#ff1f1f");
	arc(x, y, 70, 60, PI, TWO_PI);
	fill("#B60E0E");
	ellipse(x, y, 70, 10);
	fill("#fce8cc");
	arc(x, y, 25, 80, 0, PI);
	fill(255);
	circle(x - 10, y - 20, 10);
	circle(x + 12, y - 15, 10);
	circle(x - 25, y - 10, 10);
	circle(x + 25, y - 12, 10);
}

function createCat() {
	let x = mouseX,
		y = mouseY;
	fill("#fcfaf5");
	ellipse(x, y, 60, 50);
	push();
	beginClip();
	push();
	translate(x - 20, y - 22);
	rotate(radians(-30));
	triangle(-10, 5, 0, -5, 10, 5);
	pop();
	push();
	translate(x + 20, y - 22);
	rotate(radians(30));
	triangle(-10, 5, 0, -5, 10, 5);
	pop();
	push();
	translate(x - 12, y - 12);
	rotate(radians(-30));
	ellipse(0, 0, 40, 20);
	pop();
	push();
	translate(x + 12, y - 12);
	rotate(radians(30));
	ellipse(0, 0, 40, 20);
	pop();
	endClip();
	fill("#75A1B6");
	rect(x - 50, y - 50, 100, 100);
	pop();
	fill(0);
	circle(x - 10, y + 3, 8);
	circle(x + 10, y + 3, 8);
	fill(255);
	arc(x - 10, y + 3, 4, 4, PI, TWO_PI);
	arc(x + 10, y + 3, 4, 4, PI, TWO_PI);
	circle(x - 11, y + 4, 2.2);
	circle(x + 11, y + 4, 2.2);
	noFill();
	stroke(0);
	arc(x, y + 10, 5, 5, 0, PI, CHORD);
}

function drawMyEye() {
	if (mushroomInFace) {
		stroke(0);
		strokeWeight(2);
		noFill();
		let w = 10,
			h = 10;
		line(269 - w, 211 - h, 269 + w, 211);
		line(269 + w, 211, 269 - w, 211 + h);
		line(331 + w, 211 - h, 331 - w, 211);
		line(331 - w, 211, 331 + w, 211 + h);
	} else if (catInFace) {
		stroke(0);
		strokeWeight(1.5);
		noFill();
		arc(269, 215, 30, 30, PI, TWO_PI);
		arc(331, 215, 30, 30, PI, TWO_PI);
	} else {
		stroke(0);
		strokeWeight(1.5);
		noFill();
		arc(269, 211, 30, 20, PI, TWO_PI);
		arc(331, 211, 30, 20, PI, TWO_PI);
		noStroke();
		fill(0);
		circle(269, 212, 20);
		circle(331, 212, 20);
		fill(255);
		arc(269, 210, 14, 8, PI, TWO_PI);
		circle(267, 211, 3);
		arc(331, 210, 14, 8, PI, TWO_PI);
		circle(333, 211, 3);
	}
}

function drawMyLip() {
	if (mushroomInFace) {
		stroke(lip_color);
		noFill();
		arc(300, 260, 20, 20, PI, TWO_PI);
	} else if (catInFace) {
		noStroke();
		fill(lip_color);
		arc(300, 250, 20, 20, 0, PI);
	} else {
		noStroke();
		fill(lip_color);
		ellipse(300, 258, 10, 8);
	}
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(255);
	noStroke();
	fill(face_color);
	ellipse(300, 200, face_width, face_height);
	drawHair();
	fill(brow_color);
	ellipse(269, 186, 18, 6);
	ellipse(331, 186, 18, 6);
	fill(blur_color);
	noStroke();
	ellipse(250, 231, 25, 20);
	ellipse(350, 231, 25, 20);
	drawMyEye();
	stroke(0);
	strokeWeight(1);
	noFill();
	arc(300, 238, 6, 3, 0, PI);
	drawMyLip();
	noStroke();
	fill(cloth_color);
	arc(300, 400, 200, 200, PI, TWO_PI);
	fill(face_color);
	rect(285, 287, 30, 30);
	fill(kara_color);
	triangle(285, 293, 300, 320, 273, 316);
	triangle(315, 293, 327, 316, 300, 320);
	rect(296, 318, 8, 10);
	push();
	translate(258, 127);
	rotate(radians(55));
	rect(0, 0, 16, 4);
	rect(0, 6, 16, 4);
	pop();
	if (withCat) createCat();
	if (withMushroom) createMushroom();
	createMessage();
}

function mouseMoved() {
	if (withCat) catInFace = isRectInFace(mouseX, mouseY, catW, catH);
	if (withMushroom)
		mushroomInFace = isRectInFace(mouseX, mouseY, mushroomW, mushroomH);
}

function mouseReleased() {
	if (isSaving) return;
	withCat = false;
	withMushroom = false;
	mushroomInFace = false;
	catInFace = false;
}

function keyPressed() {
	if (key === "s") {
		isSaving = true;
		saveGif("mySketch", 10, () => {
			isSaving = false;
		});
		return;
	}
	if (key === "c" || key === "C") {
		withCat = true;
		withMushroom = false;
		mushroomInFace = false;
		catInFace = false;
		message = "고양이 추가! 얼굴로 가져가보세요!";
		messageStartM = millis();
	}
	if (key === "m" || key === "M") {
		withMushroom = true;
		withCat = false;
		mushroomInFace = false;
		catInFace = false;
		message = "버섯 추가! 얼굴로 가져가보세요!";
		messageStartM = millis();
	}
}
