/**
 * @file jsRBFNN/RBFNeuron.js
 * @brief Definition of RBFNeuron class
 * @date 24/sep/2015, 12:00
 * @author Victor M. Rivas Santos vrivas@ujaen.es
 *         Geneura Team (http://geneura.wordpress.com)
 */
/*
 * --------------------------------------------
 *
 * Copyright (C) 2015 Victor M. Rivas Santos vrivas@ujaen.es
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 * 
 */

try {
    // Namespace has to have been loaded

    if (typeof js_rbfnn === "undefined")
        throw new ReferenceError("RBFNeuron won't work since jsRBFNN/namespace.js was not loaded.");

    /**
     * Neuron's (for RBFNN) constructor
     * @param {array of floats} _center The center of the Gaussian function
     * @param {float} _radius The radius or width of the Gaussian function
     * @returns {Neuron}
     */
    js_rbfnn.RBFNeuron = function (_center, _radius) {
        this.center = (typeof _center !== 'undefined') ? _center.slice() : [];
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
         * Returns a copy of the neuron
         * @returns {js_rbfnn.RBFNeuron} A copy of the neuron
         */
        this.copy = function () {
            return new js_rbfnn.RBFNeuron(this.center, this.radius);
        }

        /**
         * Returns the size (length) of the center
         * @returns {Integer} The length or size of the center.
         */
        this.size=function() {
            return this.center.length;
        }
        /**
         * Test function for RBFNeuron
         * @returns {undefined}
         */
        this.test = function () {
            var tmp = new js_rbfnn.RBFNeuron([1, 2], 3);
            try {
                alert(tmp.apply([1, 2])); // Must return 1
                alert(tmp.apply([1, 2, 3])); // Must throw an exception
            } catch (e) {
                console.log("Capturing exception: ", e.message)
            }
            try {
                tmp2 = tmp.copy();
                alert(tmp2.apply([1, 2])); // Must return 1
                
                console.log( "Changing copy... does affect original?");
                console.log( " - Before");
                console.log( "tmp.center[0] is ", tmp.center[0] );
                console.log( "tmp2.center[0] is ", tmp2.center[0] );
                console.log( "tmp.radius is ", tmp.radius );
                console.log( "tmp2.radius] is ", tmp2.radius );
                tmp2.center[0]=89;
                tmp2.radius=12;
                console.log( " - After (center and radius should be different: 89 and 12, resp.");
                console.log( "tmp.center[0] is ", tmp.center[0] );
                console.log( "tmp2.center[0] is ", tmp2.center[0] );
                console.log( "tmp.radius is ", tmp.radius );
                console.log( "tmp2.radius] is ", tmp2.radius );
                
            } catch (e) {
                console.log("Capturing exception: ", e.message)
            }
        }
    }

} catch (e) {
    console.log(e.message);
}
