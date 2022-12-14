import * as mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg"
    },
    verified: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function(next){
    if (this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 8)
    }
    next()
})

//method do not work with arrow function
userSchema.methods.comparePassword = async function(password) {
    const result = await bcrypt.compareSync(password, this.password)
    return result
}

const UserModel = mongoose.model("User", userSchema)
export default UserModel
