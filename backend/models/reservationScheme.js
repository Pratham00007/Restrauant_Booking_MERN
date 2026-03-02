import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3,"first name must be minimum 3 character"],
        maxLength:[10,"first name must be maximum 10 character"],
    },
    lastName:{
        type:String,
        required: true,
        minLength:[3,"last name must be minimum 3 character"],
        maxLength:[10,"last name must be minimum 10 character"],
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must be of 10  length"],
        maxLength:[10,"Phone number must be of 10  length"],

    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema);