

import app from './app'
import { AppDataSource } from './connection/data-source'


const port = process.env.PORT
/*app.get('/',(req,res) =>{
   res.send("Hello world")
})*/

AppDataSource.initialize()

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})