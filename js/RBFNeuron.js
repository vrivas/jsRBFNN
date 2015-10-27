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

if (typeof require !== 'undefined')
    js_rbfnn = require('./namespace.js');

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
        this.size = function () {
            return this.center.length;
        }
    }
    /**
     * Test function for RBFNeuron
     * @param {string} _div Name of the div where output will be written, or null to write in console.log
     * @returns {undefined}
     */
    js_rbfnn.test_neuron = function (_div) {
        var tmp = new js_rbfnn.RBFNeuron([1, 2], 3);
        _div = (typeof document !== 'undefined') ? document.getElementById(_div) : null;
        var msg = "";

        msg = "Testing RBFNeuron...\n";
        msg += "  Testing neuron.apply...\n"
        try {
            msg += "    Should return 1: " + tmp.apply([1, 2])+"\n"; // Must return 1
            msg += "    Should throw an exception: " + tmp.apply([1, 2, 3])+"\n"; // Must throw an exception
        } catch (e) {
            msg += "    Capturing exception: " + e.message+"\n";
        }

        if (_div) {
            _div.innerHTML += "<pre>" + msg + "</pre>"+"\n";
        } else {
            console.log(msg);
        }

        try {
            msg = "  Testing copy of neurons...\n";

            tmp2 = tmp.copy();
            msg += "    Should return 1: " + tmp2.apply([1, 2])+"\n"; // Must return 1

            msg += "    Changing copy... does affect original?"+"\n";
            msg += "     - Before"+"\n";
            msg += "       tmp.center[0] is " + tmp.center[0]+"\n";
            msg += "       tmp2.center[0] is " + tmp2.center[0]+"\n";
            msg += "       tmp.radius is " + tmp.radius+"\n";
            msg += "       tmp2.radius] is " + tmp2.radius+"\n";
            tmp2.center[0] = 89;
            tmp2.radius = 12;
            msg += "     - After (center and radius should be different: 89 and 12, resp."+"\n";
            msg += "       tmp.center[0] is " + tmp.center[0]+"\n";
            msg += "       tmp2.center[0] is " + tmp2.center[0]+"\n";
            msg += "       tmp.radius is " + tmp.radius+"\n";
            msg += "       tmp2.radius is " + tmp2.radius+"\n";

        } catch (e) {
            msg += "Capturing exception: " + e.message+"\n";
        }
        if (_div) {
            _div.innerHTML += "<pre>" + msg + "</pre>"+"\n";
        } else {
            console.log(msg);
        }
    }


} catch (e) {
    console.log(e.message);
}

