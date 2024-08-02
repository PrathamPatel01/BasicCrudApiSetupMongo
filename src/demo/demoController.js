import {User} from "./demoModel.js"

export const addUser=async(req,res,next)=>{
    const { firstName, lastName, email, password, DOB } = req.body;
    try {
      const user = new User({ firstName, lastName, email, password, DOB });
      await user.save();
      res.status(201).send(user);
    } catch (error) {
     next(error)
    }
}

export const deleteUser=async(req,res,next)=>{
    const {id} =req.params;
    try {
        const user=await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).send("User not Found");
        }
        res.status(200).send("User deleted Sucessfully");
        
    } catch (error) {
        next(error)
        
    }

}

export const updateUser = async (req,res,next)=>{
    const { id } = req.params;
    const { firstName, lastName, email, password, DOB } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { firstName, lastName, email, password, DOB },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send(user);
    } catch (error) {
      next(error)
    }
}

export const userById = async(req,res,next)=>{
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send(user);
    } catch (error) {
      next(error)
    }
}

export const findUser = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).send(users);
      } catch (error) {
        next(error)
      }
}

