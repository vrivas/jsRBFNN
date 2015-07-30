/** 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var js_rbfnn = {};

/**
 * Computes euclidean distance between two arrays
 * @param {array of floats} a First array
 * @param {array of floats} b Second array
 * @throws {RangeError} Error if lengths of a and b are differents
 * @returns {Number} The euclidean distance
 */
js_rbfnn.distance = function (a, b) {
    if (a.length != b.length)
        throw new RangeError("Distance can't be computed: "
                + "points have different lengths; "
                + a.length + " vs " + b.length);
    return Math.sqrt(
            a.map(function (e, i) {
                return e - b[i];
            })
            .map(function (e) {
                return Math.pow(e, 2);
            })
            .reduce(function (a, b) {
                return a + b;
            }, 0)
            );
}
