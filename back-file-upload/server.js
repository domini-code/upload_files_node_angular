const express = require('express');  
const bodyParser = require('body-parser');  
const multipart = require('connect-multiparty');  

const app = express();  
const PORT = 3000;

const multipartMiddleware = multipart({  
    uploadDir: './uploads'
});

app.use(bodyParser.json());  

app.use(bodyParser.urlencoded({  
    extended: true
}));

app.post('/api/upload', multipartMiddleware, (req, res) => {  
    res.json({
        'message': 'File uploaded succesfully.'
    });
});

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))