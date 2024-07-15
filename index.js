const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // if using a YAML spec
// const swaggerDocument = require('./api/openapi.json'); // if using a JSON spec

const app = express();
const port = 5000;

const swaggerDocument = YAML.load('./openapi.yaml'); // if using a YAML spec

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on https://hng-backend-stage-three-dfeabeff45f4.herokuapp.com:${port}`);
    console.log(`Swagger UI is available on https://hng-backend-stage-three-dfeabeff45f4.herokuapp.com:${port}/api-docs`);
});
