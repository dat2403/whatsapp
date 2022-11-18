import {apiHelper} from "../utils/apiHelper.js";


const accessChat = async (req, res) => {
    const { userId } = req.body
    if (!userId){
        return apiHelper.sendError(res,
            'User Id params did not send to the server!', 400)
    }


}

const fetchChats = async (req, res) => {

}

const createGroupChat = async (req, res) => {

}

const renameGroupChat = async (req, res) => {

}

const removeFromGroup = async (req, res) => {

}

const addToGroup = async (req, res) => {

}

export {
    accessChat,
    fetchChats,
    createGroupChat,
    renameGroupChat,
    removeFromGroup,
    addToGroup
}
