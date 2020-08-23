function perspective(w, h, fov) {
	// Build a perspective projection matrix, for a viewport whose size is determined 
	// by parameters w (width) and h (height), and whose fov-y is passed in parameter fov.
	// Near plane is n=0.1, and far plane f=100.

	//	Perspective Projections Matrices:
	//	slide L05,	Page 36
	// a = w/h ;	phi = fov
	var n=0.1, f=100;
	var a = w / h;
	var tan_phi_d2 = Math.tan(utils.degToRad(fov / 2));

	var out = [1/(a*tan_phi_d2),		0.0,		0.0,		0.0,
		0.0,		1/(tan_phi_d2),		0.0,		0.0,
		0.0,		0.0,		(f+n)/(n-f),		(2*f*n)/(n-f),
		0.0,		0.0,		-1.0,		0.0];
return out;
}