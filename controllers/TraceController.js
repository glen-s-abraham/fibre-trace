const {findOnuById,traceOnu} = require('../dao/TraceDao')

exports.traceFromOnu = async(req,res,next)=>{
    const onu = await traceOnu(req.params.onuId)
    res.status(200).json({"data":onu})
}