const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const hashPassword = async (pwd) => {
    pwd = await bcrypt.hash(pwd, 12);
    console.log(pwd);
    return pwd;
}
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must include a name.'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please provide an email.'],
            lowercase: true,
            unique: [true, 'Email already exists'],
            validate:[validator.isEmail, 'Invalid email']
        },
        photo: String,
        password: {
            type: String,
            required:[true,'You must provide a password.'],
            minlength:[7,'Password must have at least 7 characters.'],
            select: false
        },
        confirmPwd:{
            type: String,
            required: [true, 'You must confirm your password.'],
            validate: {
                validator: function(el){
                    return el === this.password;
                },
                message:'Passwords do not match.'
            }
        },
        role: {
            type: String, 
            enum: ['admin', 'user'],
            default: 'user'
        },
        isLogged: {
            type: Number,
            default: 0
        }
    }
);
// Usamos pre para manejar la data antes de que entre a la base de datos.
userSchema.pre('save', async function(next) {
    // Solo se corre esta funcion si las contrasenas se modifican
    if (!this.isModified('password')) return next();

    // Hacer un hash al password con un cost de 12.
    const pwds = ['testing', 'this.password'];
    pwds.forEach((item) =>{hashPassword(item)});
    this.password = await bcrypt.hash(this.password, 12); //12 refers to the number of years. CPU intensive
    this.confirmPwd = await bcrypt.hash(this.confirmPwd, 12);
    //hash -> encryption
    this.passwordConfirm = undefined; // PAra validarlo, y antes de darle save, que se elimine, para que no se vea la otra contra.
    next();
})
// Creamos un modelo y luego lo exportamos para que pueda ser llamado a otros archivos.

userSchema.methods.correctPassword = async function(inputPassword, userPassword){
    return await bcrypt.compare(inputPassword, userPassword);
}

const User = mongoose.model('User', userSchema);
module.exports = User;