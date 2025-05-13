import {catchAsyncErrors} from "./models/catchAsyncErrors.js";
import {Message} from "../models/messageSchema.js";

export  const sendMessage = catchAsyncErrors(async(req, res, next)=>{
   const {firstName, lastName, email, phone, message} = req.body;
   if(!firstName || !lastName || !email || !phone || !message){
   return res.status(400).json({
    sucess:false,
    message:"Please fill full form",
   });
}
   await Message.create({firstName, lastName, email, phone, message});
   res.status(200).json({
    sucess: true,
    message: "Message sent sucessfully!",
   });
})

