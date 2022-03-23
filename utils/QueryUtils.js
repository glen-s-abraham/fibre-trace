const {getSession}= require('../neo4j')

exports.executeRead=async(query)=>{
    try{
        const res=await getSession().run(query)
        return res
    }catch(err){
        console.log(err)
    }
    
        
}