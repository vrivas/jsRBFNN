/** 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try {
// Namespace has to have been loaded
    ns = js_rbfnn;
    /**
     * RBFNN (for RBFNN) constructor. Produces a SINGLE OUTPUT
     * @param {array of RBFNeuron} _neurons The neurons of the hidden layer
     * @param {array of floats} _weights Weights from neurons to otuput
     * @param {float} _bias The "extra" weight
     * @returns {Neuron}
     */
    ns.RBFNNet = function (_neurons, _weights, _bias) {
        /// Array storing the neurons of the hidden layer
        this.neurons = _neurons || [];
        /// Array storing the weights from every hidden neuron to the output; 1 by default
        this.weights = _weights || this.neurons.map(function () {
            return 1;
        });
        /// Bias (and "extra-weigth")
        this.bias = _bias || 0;
        /**
         * Obtanis an output given an entry point using the different neurons
         * @param {array of floats} _point
         * @returns {Number} The neuron¡s output
         */
        this.apply = function (_point) {
            var b = this.bias;
            var w = this.weights;
            return this.neurons.reduce(function (prev, e, i) {
                return prev + e.apply(_point) * w[i];
            }
            , this.bias);
        }

        /**
         * Using LMS to train a network
         * @param {Array of arrays of float} _inputs
         * @param {Array of floats} _outputs
         * @param {Number} _numIt
         * @param {Number} _alfa
         * @returns {Nothing}
         */
        this.LMStrain = function (_inputs, _outputs, _numIt, _alfa) {
            if (_inputs.length != _outputs.length)
                throw new RangeError("LMS train can't be done: "
                        + "inputs and outputs have different lengths; "
                        + _inputs.length + " vs " + _outputs.length);

            for (var i = 0; i < _numIt; ++i) {
                var rndInputs = [];
                // Fills rndInputs with numbers 0 to _inputs.length
                _inputs.map(function (e, i) {
                    rndInputs[i] = i;
                });

                // For every input in the inputs vector
                for (var j = rndInputs.length; j > 0; --j) {
                    var pos = Math.floor(Math.random() * j);
                    var netsOutput = this.apply(_inputs[pos]);
                    var error = _outputs[pos] - netsOutput;
                    var neuronsEval = this.neurons.map(function (e) {
                        return e.apply(_inputs[pos]);
                    });
                    var mod = Math.sqrt(neuronsEval.reduce(function (prev, e) {
                        return prev + e * e;
                    }, this.bias)); //neuronEval of "bias" is 1; so, adding bias

                    mod = mod == 0 ? 0.000000001 : mod;
                    for (var k = 0; k < this.weights.length; ++k) {
                        this.weights[k] += _alfa * (error * neuronsEval[k] / mod);
                    }
                    this.bias += _alfa * error / mod;
                    // Overwrites the chosen position
                    rndInputs[pos] = rndInputs[j - 1];
                }
            } // i for iterations
        }



        /**
         * Test function for RBFNNet
         * @returns {undefined}
         */
        this.test = function (_id) {
            var tmp = new ns.RBFNNet(
                    [new ns.RBFNeuron([-100, -100], 1)
                                , new ns.RBFNeuron([100, 100], 10)]
                    , [10, 20]
                    , 100);
            _id = document.getElementById(_id);
            var msg = "";
            msg = "Before training: \n"
                    + "     110 is " + tmp.apply([-100, -100]) + "\n"
                    + "     , 120 is " + tmp.apply([100, 100])
            if (_id) {
                _id.innerHTML += "<p>" + msg + "</p>\n";
            } else {
                console.log(msg + "\n");
            }
            tmp.LMStrain([
                [-100, -100], [100, 100] // Inputs
            ]
                    , [700, -700] // Desired outputs
                    , 100 // Iterations
                    , 0.3);  // Alfa

            msg = "After training: \n"
                    + "     700 is " + tmp.apply([-100, -100]) + "\n"
                    + "     , -700 is " + tmp.apply([100, 100]);

            if (_id) {
                _id.innerHTML += "<p>" + msg + "</p>\n";
            } else {
                console.log(msg + "\n");
            }
        }
    }

} catch (e) {
    console.log(e.message);
}