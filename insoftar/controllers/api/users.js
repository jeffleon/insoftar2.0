const User = require('../../models/users')


exports.getUsers = async (req, res) => {
    try{
        var users = await User.findAll();
        if (users === null){
            res.status(404).send(`please add one element in the database `);
        } else{
            return res.status(200).send(users);
        }
    }catch (err){
        return res.status(500).send({"error": err});
    }
}

exports.createUser = async (req, res) => {
    try {
        const {email, nombre, apellido, telefono, cedula} = req.body;
        // look for a  email if exists, if it does send a error msg if it doesnt exist create the user
        var exists_email = await User.findAll({where: {email: email}});
        if (!exists_email.length)
        {
            var user = await User.create({nombre, apellido, email, telefono, cedula})
            res.status(200).send(user)
        }else{
            return res.status(500).send({"error": `el email ${email} ya existe en la base de datos`});
        }
    }catch (err){
        console.log(err)
        return res.status(500).send({"error": err});
    }
}

exports.getUser = async (req, res) => {
    try{
        var id = parseInt(req.params.id);
        var user = await User.findByPk(id);
        if (user == null){
            res.status(404).send(`ingrese una id valida id introducida: ${id}`);
        } else {
            res.status(200).send(user);
        }
    }catch (err){
        return res.status(500).send({"error": err})
    }
}
exports.deleteUser = async (req, res) => {
    try{
        var id = parseInt(req.params.id)
        var user = await User.findByPk(id)
        if (user === null){
            res.status(404).send(`ingrese una id valida id introducida: ${id}`)
        } else{
            await user.destroy({ force: true })
            res.status(200).send(user)
        }
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.updateUser = async (req , res) => {
    try{
        var id = parseInt(req.params.id)
        var user = await User.findByPk(id)
        if (user === null){
            res.status(404).send(`ingrese una id valida id introducida: ${id}`)
        } else{
            const {email, nombre, apellido, telefono, cedula} = req.body;
            // look for a  email if exists,if it does send a error msg if it doesnt exist update the user
            var exists_email = await User.findAll({where: {email: email}});
            if (user.email === exists_email[0].email || !exists_email.length)
            {
                user.update({ email, nombre, apellido, telefono, cedula})
                res.status(200).send(user)
            } else{
                return res.status(500).send({"error": `el email ${email} ya existe en la base de datos`});
            } 
        }
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}
