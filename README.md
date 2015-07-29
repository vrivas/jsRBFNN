# jsRBFNN
Radial basis Function Neural Networks in Javascript

Example of use: 

<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>RBFNN written in Javascript</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>RBFNN written in Javascript</h1>
        <div id="here"></div>
        <script src="./namespace.js">//Loading namespace for js.RBFNN</script>
        <script src="./RBFNeuron.js">//Loading the neurons</script>
        <script src="./RBFNNet.js">//Loading the nets</script>
        
        <script>
            (new js_rbfnn.RBFNNet()).test("here");
        </script>
    </body>
</html>