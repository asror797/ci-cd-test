const express = require('express');

const app = express();
const PORT = 7755

app.get('/',(req,res) => {
    console.log('ok')
    res.json({
        message:"OK",
        status:200,
        version:"1.0.1"
    })
})

app.listen(PORT,() => {
    console.log(`Server is runing at ${PORT}`);
});