import {apiHelper} from "../utils/apiHelper.js";
import {isValidObjectId} from "mongoose";
import UserModel from "../models/userModel.js";
import ResetTokenModel from "../models/resetTokenModel.js";
import jwt from "jsonwebtoken";

export const isResetTokenValid = async (req, res, next) => {
    const {token, id} = req.query
    if(!token || !id){
        return apiHelper.sendError(res, 'Invalid request!')
    }
    if (!isValidObjectId(id)){
        return apiHelper.sendError(res, 'Invalid user!')
    }

    const user = await UserModel.findById(id)
    if(!user) {
        return apiHelper.sendError(res, 'User not found!')
    }
    const resetToken = await ResetTokenModel.findOne({owner: user._id})
    if(!resetToken) {
        return apiHelper.sendError(res, 'Reset token not found')
    }
    const isTokenMatched = await resetToken.compareToken(token)
    if(!isTokenMatched){
        return apiHelper.sendError(res, 'Reset token is invalid!')
    }
    req.user = user
    next()
}


export const protect = async (req, res, next) => {
    const headers = req.headers
    let token;
    if(headers.authorization && headers.authorization.startsWith("Bearer")){
        try {
            token = headers.authorization.split(" ")[1]

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await UserModel.findById(decodedToken.id).select("-password")
            next()
        }catch (e) {
            return apiHelper.sendError(res, 'Not authorized, token failed')
        }
    }
    if (!token) {
        return apiHelper.sendError(res, 'Not authorized, no token')
    }
}
