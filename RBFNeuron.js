/** 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try {
    // Namespace has to have been loaded
    ns = js_rbfnn;


    /**
     * Neuron's (for RBFNN) constructor
     * @param {array of floats} _center The center of the Gaussian function
     * @param {float} _radius The radius or width of the Gaussian function
     * @returns {Neuron}
     */
    ns.RBFNeuron = function (_center, _radius) {
        this.center = _center || null;
        this.radius = _radius || null;

        /**
         * Computes eculidean distance between two arrays
         * @param {array of floats} a First array
         * @param {array of floats} b Second array
         * @throws {RangeError} Error if lengths of a and b are differents
         * @returns {Number} The euclidean distance
         */
        this.distance = function (a, b) {
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


        /**
         * Obtanis an output given an entry point using a Gaussian activation function
         * @param {array of floats} _point
         * @returns {Number} The neuron¡s output
         */
        this.apply = function (_point) {
            return Math.exp(-Math.pow(this.distance(this.center, _point), 2) / (2 * Math.pow(this.radius, 2)));
        }



        /**
         * Test function for RBFNeuron
         * @returns {undefined}
         */
        this.test = function () {
            var tmp = new ns.RBFNeuron([1, 2], 3);
            alert(tmp.apply([1, 2])); // Must return 1
            alert(tmp.apply([1, 2, 3])); // Must throw an exception
        }
    }

} catch (e) {
    console.log(e.message);
}
