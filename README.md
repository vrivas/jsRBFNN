# jsRBFNN
Radial basis Function Neural Networks in Javascript

LMS is used to train.

Example of use: 

    <!DOCTYPE html>
    <html>
        <head>
            <title>RBFNN written in Javascript</title>            
            <script src="./namespace.js">//Loading namespace for js.RBFNN</script>
            <script src="./RBFNeuron.js">//Loading the neurons</script>
            <script src="./RBFNNet.js">//Loading the nets</script>
        </head>
        <body>
            <h1>RBFNN written in Javascript</h1>
            <div id="here"></div>            
            <script>
                (new js_rbfnn.RBFNNet()).test("here");
            </script>
    </body>
</html>