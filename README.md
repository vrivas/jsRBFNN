# jsRBFNN
Radial basis Function Neural Networks in Javascript

LMS is used to train.

Example of use: 

<!DOCTYPE html>
<html>
    <head>
        <title>RBFNN written in Javascript</title>            
        <script src="./js/namespace.js">//Loading namespace for js.RBFNN</script>
        <script src="./js/RBFNeuron.js">//Loading the neurons</script>
        <script src="./js/RBFNNet.js">//Loading the nets</script>
    </head>
    <body>
        <h1>RBFNN written in Javascript</h1>
        <div id="somediv"></div>            
        <script>
            if (typeof js_rbfnn === 'undefined') {
                throw "jsRBFNN: Error in index.html > js_rbfnn is not defined";
            }
            js_rbfnn.test('somediv')
        </script>
    </body>
</html>

## Code style

The style for the code is controlled by Hound (https://houndci.com/)
