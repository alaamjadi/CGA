function worldViewProjection(carx, cary, carz, cardir, camx, camy, camz) {
	// Computes the world, view and projection matrices for the game.
	
	// carx, cary and carz encodes the position of the car.
	// Since the game is basically in 2D, camdir contains the rotation about the y-axis to orient the car
	
	// The camera is placed at position camx, camy and camz. The view matrix should be computed using the
	// LookAt camera matrix procedure, with the correct up-vector.
	
	//	Professor Lecture and note hints
	//	world matrix of car: (carx,cary, carz, cardir)	cardir=carAngle
	//	view(Camera): (camx, camy,camz)
	//	you can use utils.crossVector(Va, Vb), utils.normalizeVector3(V)
	//	Array in JS is like this [carx, cary, carz] which each elements are variables
		
		//defining the variable space using JS array
		var unit_y = [0,1,0];
		car = [carx,cary,carz];
		//	Program
	
		//	Customizning A05/view.js (previous assignment)
		//	substituing car position with xyz
		//	substituing carAngle with alpha (y-axis rotation)
		//	Substitutig beta,rho (other rotation anggles with zero) + Scale as one
		//	formulas for world matrix on L07/Page23
		//				***	World Matrix ***
		var a = utils.MakeTranslateMatrix(carx, cary, carz);
		var b = utils.MakeRotateYMatrix(cardir);
		var world = utils.multiplyMatrices(a, b);
		//				*** Camera View ***
		//	formulas for camera view on L06/Pages 30-31
		var Vz 	=	utils.normalizeVector3([camx-carx, camy-cary, camz-carz]);
	
		var Vxi	=	utils.crossVector(unit_y, Vz);
		var Vx	=	utils.normalizeVector3(Vxi);
	
		var Vy	=	utils.crossVector(Vz, Vx);
	
		var Mc	=	[Vx[0], Vy[0], Vz[0], camx,
					Vx[1], 	Vy[1], Vz[1], camy,
					Vx[2], 	Vy[2], Vz[2], camz,
					0.0, 	0.0, 	0.0, 	1];
	
		var Mv	=	utils.invertMatrix(Mc);
	
	
	
	
		return [world, Mv];
	}