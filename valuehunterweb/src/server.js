
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//cc1UbCOG9sNEoxiP
app.use(bodyParser.json());

app.post('/reset-password',(req,res) => { 
    res.status(200).json({message : "Password changed."});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});