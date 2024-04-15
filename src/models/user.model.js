import mongoose,{Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        require:true,
       
    },
    avatar:{
        type:String, // cloudinary url
        require:true,
        trim:true
    },
    coverImage:{
        type:String
       
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"video"
       
    },
    password:{
        type:String,
        required:[true,"Password is required"], 
    },
    refreshToken:{
        type:String,
    },
    
},
    {timestamps:true}
)

userSchema.pre("save", )

export const User = mongoose.model("User",userSchema);