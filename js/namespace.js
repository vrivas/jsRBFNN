/**
 * @file jsRBFNN/namespace.js
 * @brief Namespace for jsRBFNN
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

var js_rbfnn = {};


/**
 * Computes euclidean distance between two arrays
 * @param {array of floats} a First array
 * @param {array of floats} b Second array
 * @throws {RangeError} Error if lengths of a and b are differents
 * @returns {Number} The euclidean distance
 */
js_rbfnn.distance = function (a, b) {
    if (typeof a === 'undefined')
        throw new TypeError("Distance can't be computed: "
                + "first parameter doen't exist ");
    if (typeof b === 'undefined')
        throw new TypeError("Distance can't be computed: "
                + "second parameter doen't exist ");
    if (a.length != b.length)
        throw new RangeError("Distance can't be computed: "
                + "points have different lengths; "
                + a.length + " vs " + b.length);

    // Turning parameters into array to apply .map
    a = (a.length) ? a : [a];
    b = (b.length) ? b : [b];
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
