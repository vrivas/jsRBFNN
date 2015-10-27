/** 
 * Example of use of jsRBFNN in node
 * @file app.js
 * @author Victor Rivas <vrivas@ujaen.es>
 * @date 27-Oct-2015
 */

//#!/usr/bin/env node
'use strict';

var  js_rbfnn=require('./js/namespace.js');
require('./js/RBFNeuron.js')
require('./js/RBFNNet.js');

js_rbfnn.test_neuron();
js_rbfnn.test_net();