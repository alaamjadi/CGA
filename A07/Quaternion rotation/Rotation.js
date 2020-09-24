// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.

// [θ, ψ, Φ]
//var q = new Quaternion(1, 0, 0, 0);
let euler = [0.0, 0.0, 0.0]

function updateWorld(rvx, rvy, rvz) {

	/* var rad = Math.PI / 180;
	var delta = new Quaternion(Math.cos(rad/2), Math.sin(rad/2)*rvx, Math.sin(rad/2)*rvy, Math.sin(rad/2)*rvz);
	q = q.mul(delta);
	var out = q.toMatrix4(); */

	euler[0] += rvx;
	euler[1] += rvy;
	euler[2] += rvz;

	// Quaternion.fromEuler(Φ, θ, ψ[, order="ZXY"])
	let q = new Quaternion.fromEuler(utils.degToRad(euler[2]), utils.degToRad(euler[0]), utils.degToRad(euler[1]));

	let out = q.toMatrix4(); // using library

	return out;
}