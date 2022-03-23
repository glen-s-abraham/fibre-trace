const neo4j = require('neo4j-driver')

let driver;

exports.initNeo4jDrvier=()=>{
    try{
        driver = neo4j.driver(
            'bolt://127.0.0.1',
            neo4j.auth.basic('neo4j', 'test')
        )
        console.log("Neo4j Driver initialized")
        return true
    }catch(err){
        console.log(err)
        return false
    }
   
}


exports.getSession =()=>{
    return driver.session({
        database: 'neo4j',
        defaultAccessMode: neo4j.session.WRITE
    })
} 


