const daySky = "#ebf8fc";
const duskSky = "#FCA47F";

function setup() {
	createCanvas(600, 400);
	frameRate(60);
}

function draw() {
	// 배경 색상 설정
	const tSky = (sin((TWO_PI * frameCount) / 240) + 1) / 2;
	background(lerpColor(daySky, duskSky, tSky));

	noStroke();

	// 산1
	fill("#353D50");
	triangle(60, 50, 240, 350, -100, 350);

	// 산2
	fill("#5f6a7a");
	triangle(0, 100, 60, 350, 0, 350);

	// 산3
	fill("#7D8CA2");
	triangle(160, 20, 40, 350, 280, 350);

	fill("#D6DADF");
	triangle(160, 20, 240, 350, 280, 350);

	// 땅
	noStroke();
	fill("#fff");
	rect(0, 350, 600, 50);

	// 아델리 펭귄
	const t = (1 - cos((TWO_PI * frameCount) / 240)) / 2.5;
	const yOff = lerp(350, 405, t);
	const scl = lerp(0.3, 1.1, t);

	push();
	translate(360, yOff);
	scale(scl);
	translate(-360, -350);

	// 얼굴
	fill("#141414");
	arc(360, 210, 120, 150, PI, 0);

	// 몸
	arc(360, 350, 200, 400, PI, 0);

	// 눈
	stroke(255);
	strokeWeight(3);
	arc(340, 155, 12, 10, 0, PI); // 왼쪽(20px)
	arc(380, 155, 12, 10, 0, PI); // 오른쪽(20px)

	// 부리
	noStroke();
	fill("#c87060");
	quad(
		360,
		167, // 위
		367,
		174, // 오른
		360,
		181, // 아래
		353,
		174, // 왼
	);

	stroke("#141414");
	strokeWeight(1);
	line(353, 174, 367, 174);

	// 배
	noStroke();
	fill("#FFFFFF");
	arc(360, 350, 160, 270, PI, 0);

	// 깃털
	noFill();
	stroke("#636262");
	strokeWeight(1);

	arc(354, 260, 12, 12, 0, PI);
	arc(366, 260, 12, 12, 0, PI);

	arc(354, 272, 12, 12, 0, PI);
	arc(366, 272, 12, 12, 0, PI);

	// 날개
	const wingAng = sin((TWO_PI * frameCount) / 60) * 0.4;
	noStroke();
	fill("#141414");

	// 왼쪽 날개
	push();
	translate(320, 200);
	rotate(wingAng);
	// ellipse(250, 200 + flap, 140, 30);
	ellipse(-70, 0, 140, 30);
	pop();

	// 오른쪽 날개
	push();
	translate(400, 200);
	rotate(-wingAng);
	ellipse(70, 0, 140, 30);
	pop();

	pop();
}

function keyPressed() {
	if (key === "s" || key === "S") saveGif("penguin_is_coming", 5);
}
