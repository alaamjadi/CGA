function move() {
	// Rotate 45 degrees around an arbitrary axis passing through (1,0,-1) which
	// The x-axis can be aligned to the arbitrary axis after a rotation of 30 degrees around the z-axis,
	//and then - 60 degrees around the y axis.
	var R01 = utils.MakeTranslateMatrix(1,0,-1);
	var R02 = utils.MakeRotateYMatrix(-60);
	var R03 = utils.MakeRotateZMatrix(30);
	
	var R04 = utils.MakeRotateXMatrix(45);
	
	var R05 = utils.invertMatrix(utils.MakeRotateZMatrix(30));
	var R06 = utils.invertMatrix(utils.MakeRotateYMatrix(-60));
	var R07 = utils.invertMatrix(utils.MakeTranslateMatrix(1,0,-1));
	
	var R08 = utils.multiplyMatrices(R06, R07);
	var R09 = utils.multiplyMatrices(R05, R08);
	var R10 = utils.multiplyMatrices(R04, R09);
	var R11 = utils.multiplyMatrices(R03, R10);
	var R12 = utils.multiplyMatrices(R02, R11);
	var R13 = utils.multiplyMatrices(R01, R12);



	// Half the size of an object, using as fixed point (5,0,-2)
	var R20 = utils.MakeTranslateMatrix(5, 0, -2);
	var R21 = utils.MakeScaleMatrix(0.5);
	var R22 = utils.invertMatrix(utils.MakeTranslateMatrix(5, 0, -2));

	var R23 = utils.multiplyMatrices(R20, R21);
	var R24 = utils.multiplyMatrices(R23, R22);



	// Mirror the object 
	// along a plane passing through(1, 1, 1), 
	// and obtained rotating 15 degree around the x axis
	// the xz plane
	var R30 = utils.MakeTranslateMatrix(1, 1, 1);
	var R31 = utils.MakeRotateXMatrix(15);

	var R32 = utils.MakeScaleNuMatrix(1, -1, 1);

	var R33 = utils.invertMatrix(utils.MakeRotateXMatrix(15));
	var R34 = utils.invertMatrix(utils.MakeTranslateMatrix(1, 1, 1));

	var R35 = utils.multiplyMatrices(R30, R31);
	var R36 = utils.multiplyMatrices(R35, R32);
	var R37 = utils.multiplyMatrices(R36, R33);
	var R38 = utils.multiplyMatrices(R37, R34);



	// Apply the inverse of the following sequence of transforms:
	// Translation of(0, 0, 5) then rotation of 30 degree around the Y axis, and finally a uniform scaling of a factor of 3.
	var R40 = utils.invertMatrix(utils.MakeTranslateMatrix(0, 0, 5));
	var R41 = utils.invertMatrix(utils.MakeRotateYMatrix(30));
	var R42 = utils.invertMatrix(utils.MakeScaleMatrix(3));

	var R43 = utils.multiplyMatrices(R40, R41);
	var R44 = utils.multiplyMatrices(R43, R42);

	

	return [R13, R24, R38, R44];
}
