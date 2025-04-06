import User from '../models/user.model.js'

export const getUser=async(req,res)=>{
    try{
        const users =await User.find({});
        res.status(200).json({sucess:true, data:users});
    }catch(error){
        console.log("error in fetching the users",error.message);
        res.status(500).json({sucess:false,message:"Server Error"});    
    }
};

export const createUser=async(req, res) => {
    const user = req.body; 
    if (!user.name || !user.age || !user.qualification) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newUser = new User(user);
    
    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in creating user:", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateUser= async(req,res)=>{
    const { _id } = req.params;
    const updatedData = req.body;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const updatedUser = await User.findByIdAndUpdate(_id, updatedData, { new: true });
        res.status(200).json({ success: true, message: "User updated", user: updatedUser });
    } catch (error) {
        console.error("Error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteUser= async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found"});
        }

        await User.findByIdAndDelete(_id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error("Error in deleting user:", error.message);    
        res.status(500).json({ success: false, message: "Server error" });
    }
}
