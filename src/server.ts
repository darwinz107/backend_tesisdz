

import app from './app'


const port = process.env.PORT
/*app.get('/',(req,res) =>{
   res.send("Hello world")
})*/

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})