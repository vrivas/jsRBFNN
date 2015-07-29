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
         * Obtanis an output given an entry point using a Gaussian activation function
         * @param {array of floats} _point
         * @returns {Number} The neuron¡s output
         */
        this.apply = function (_point) {
            return Math.exp(-Math.pow(js_rbfnn.distance(this.center, _point), 2) / (2 * Math.pow(this.radius, 2)));
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
