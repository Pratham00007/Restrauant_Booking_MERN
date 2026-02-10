class Eroorhandler extends Error{
    constructor(message,statusCode){
        super(message); // error class in js already exist and call message from that
        this.statusCode=statusCode;

    }
}

export const errorMiddleware = (err,req,res,next)=>{
    err.message=err.message || "Internal server error";
    err.statusCode=err.statusCode || 500;

    return res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};

export default Eroorhandler;