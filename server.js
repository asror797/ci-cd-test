const express = require('express');

const app = express();
const PORT = 7755

app.get('/',(req,res) => {
    res.json({
        message:"OK",
        status:200
    })
})

app.listen(PORT,() => {
    console.log(`Server is runing at ${PORT}`);
});