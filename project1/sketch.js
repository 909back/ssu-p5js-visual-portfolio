function setup() {
	createCanvas(600, 400);
	noLoop();
}

function draw() {
	background("#ebf8fc");
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

	// 아델리 펭귄 (정적)

	// 얼굴
	fill("#141414");
	arc(360, 210, 120, 150, PI, 0);

	// 몸
	arc(360, 350, 200, 400, PI, 0);

	// 날개 (수평으로 펼친 상태)
	noStroke();
	fill("#141414");
	ellipse(250, 200, 140, 30); // 왼쪽 날개
	ellipse(470, 200, 140, 30); // 오른쪽 날개

	// 눈
	stroke(255);
	strokeWeight(3);
	arc(340, 155, 12, 10, 0, PI);
	arc(380, 155, 12, 10, 0, PI);

	// 부리
	noStroke();
	fill("#c87060");
	quad(360, 167, 367, 174, 360, 181, 353, 174);

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
}
