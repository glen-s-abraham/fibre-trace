const app = require("./app");
const {initNeo4jDrvier}= require('./neo4j')

if(initNeo4jDrvier()){
    app.listen(8080,()=>{
        console.log("app listening on port 8080")
    })
}



