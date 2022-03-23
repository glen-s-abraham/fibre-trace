const {executeRead}=require('../utils/QueryUtils')


exports.findOnuById=async (onuId)=>{
    const query=`match (onu:ONU) where onu.id="${onuId}" return onu`
    const res = await executeRead(query)
    return res.records[0]?res.records[0].get('onu').properties:null
}

exports.traceOnu = async(onuId)=>{
    const query = `match (onu:ONU)--(splitter:Equipment)--(feeder:feeder)--(olt:OLT) 
    where onu.id="${onuId}" return onu,splitter,feeder,olt `
    const res = await executeRead(query)
    const data=[]
    if(res.records[0]){
        data.push(res.records[0].get('onu').properties)
        data.push(res.records[0].get('splitter').properties)
        data.push(res.records[0].get('feeder').properties)
        data.push(res.records[0].get('olt').properties)
        console.log(data)
    }
    return data
}


