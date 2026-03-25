const yup=require('yup');


async function validateUser(req, res,next) {
    try {
        
        const schema =yup.object().shape({
        name: yup.string().matches(/^[A-Z][A-za-z]/).required(),
        email:yup.string().matches(/^[A-Za-z]+@esprit.tn+$/, "l'email est avec @espit.tn").required(),
        phone:yup.number().min(8).required(),
        password:yup.number().required(), //.matches(/^[A-Za-z0-9*,-]/
        });
        await schema.validate(req.body);
        next();

    } catch (error) {
        res.send(error)
    }
    
} 
module.exports={validateUser}