const adminAuth = (req,res,next) => {
    console.log("Admin Auth is Getting checked...!")
    const token = "XYZ";
    const isAdminAuthorized = token === "XYZ" ;
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    };
};

const userAuth = (req,res,next) => {
    console.log("User Auth is Getting checked...!")
    const token = "XYZ";
    const isAdminAuthorized = token === "XYZ" ;
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    };
};

module.exports = {
    adminAuth,
    userAuth,
}