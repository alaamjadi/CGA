function view(cx, cy, cz, alpha, beta, rho) {
	// Create a view matrix for a camera in position cx, cy and cz, looking in the direction specified by
	// alpha, beta and rho, as outlined in the course slides.
	
	//slide L06,	Page 18

	var R01 = utils.MakeTranslateMatrix(cx, cy, cz);
	var R02 = utils.MakeRotateYMatrix(alpha);
	var R03 = utils.MakeRotateXMatrix(beta);
	var R04 = utils.MakeRotateZMatrix(rho);

	var R05 = utils.multiplyMatrices(R04, R03);
	var R06 = utils.multiplyMatrices(R05, R02);
	var R07 = utils.multiplyMatrices(R06, R01);

	var R08 = utils.invertMatrix(R07);

	return R08;
}