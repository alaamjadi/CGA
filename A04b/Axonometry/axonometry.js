function axonometry() {
	var w = 50;
	var f = 101;
	var n = 1;
	var a = 16 / 9;

	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	var A01 = utils.MakeParallel(w, a, n, f);
	var A02 = utils.MakeRotateXMatrix(35.26);
	var A03 = utils.MakeRotateYMatrix(45);

	var A04 = utils.multiplyMatrices(A01, A02);
	var A05 = utils.multiplyMatrices(A04, A03);



	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var B01 = utils.MakeParallel(w, a, n, f);
	var B02 = utils.MakeRotateXMatrix(20);
	var B03 = utils.MakeRotateYMatrix(45);

	var B04 = utils.multiplyMatrices(B01, B02);
	var B05 = utils.multiplyMatrices(B04, B03);


	
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var C01 = utils.MakeParallel(w, a, n, f);
	var C02 = utils.MakeRotateXMatrix(-30);
	var C03 = utils.MakeRotateYMatrix(30);

	var C04 = utils.multiplyMatrices(C01, C02);
	var C05 = utils.multiplyMatrices(C04, C03);



	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	var D01 = utils.MakeParallel(w, a, n, f);
	var D02 = utils.MakeShearZMatrix(-1 * Math.cos(45), -1 * Math.sin(45))

	var D03 = utils.multiplyMatrices(D01, D02);



	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var E01 = utils.MakeParallel(w, a, n, f);
	var E02 = utils.MakeShearZMatrix(-0.5 * Math.cos(45), -0.5 * Math.sin(45))

	var E03 = utils.multiplyMatrices(E01, E02);

	return [A05, B05, C05, D03, E03];
}