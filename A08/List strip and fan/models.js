function buildGeometry() {
	var i;

	// Draws a cube (replace the vertices)
	var vert1 =[
		[-1.0, -1.0, -1.0],
		[0.0, -1.0, -1.0],
		[-1.0, 0.0, -1.0],
		[0.0, -1.0, -1.0],
		[0.0, 0.0, -1.0],
		[-1.0, 0.0, -1.0],
		[0.0, -1.0, -1.0],
		[0.0, -1.0, 0.0],
		[0.0, 0.0, -1.0],
		[0.0, -1.0, 0.0],
		[0.0, 0.0, 0.0],
		[0.0, 0.0, -1.0],
		[-1.0, -1.0, -1.0],
		[-1.0, -1.0, 0.0],
		[-1.0, 0.0, 0.0],
		[-1.0, 0.0, 0.0],
		[-1.0, 0.0, -1.0],
		[-1.0, -1.0, -1.0],
		[-1.0, -1.0, -1.0],

		[-1.0, -1.0, 0.0],
		[0.0, -1.0, 0.0],
		[0.0, -1.0, 0.0],
		[0.0, -1.0, -1.0],
		[-1.0, -1.0, -1.0],
		[-1.0, 0.0, -1.0],
		[0.0, 0.0, -1.0],
		[-1.0, 0.0, 0.0],
		[-1.0, 0.0, 0.0],
		[0.0, 0.0, 0.0],
		[0.0, 0.0, -1.0],
		[-1.0, 0.0, 0.0],
		[0.0, 0.0, 0.0],
		[-1.0, -1.0, 0.0],
		[-1.0, -1.0, 0.0],
		[0.0, -1.0, 0.0],
		[0.0, 0.0, 0.0]
	];

	addMesh(vert1, "L", [1.0, 0.0, 0.0]);


	// Draws a flat L-shaped pattern (replace the vertices)
	var vert2 = [
		[-1.0, 2.5, 0.0],
		[0.0, 2.5, 0.0],
		[-1.0, 0.0, 0.0],
		[0.0, 0.0, 0.0],
		[-1.0, -1.0, 0.0],
		[1.0, 0.0, 0.0],
		[1.0, -1.0, 0.0]
	];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


	// Draws a flat hexagon (replace the vertices)
	var vert3 = calcHexVertxCoord(0,0,1)
	
	addMesh(vert3, "F", [0.0, 1.0, 0.0]);

}

// calculating Hexagon Vertix Coordinates
function calcHexVertxCoord(centerX, centerY, size) {
	var coordinates = []
	// Pushing the center value to the coordinates array
	coordinates.push([centerX, centerY, 0.0])
	for (i = 0; i < 7; i++) {
		coordinates.push([(size*Math.cos(utils.degToRad(0+i*60)))+centerX,(size*Math.sin(utils.degToRad(0+i*60)))+centerY, 0.0])
	}
	return coordinates
}