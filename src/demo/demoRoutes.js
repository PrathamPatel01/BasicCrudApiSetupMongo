import express from "express"
import { addUser, deleteUser, findUser, updateUser, userById } from "./demoController.js";
import { userByIdValidation,addUserValidation,deleteUserValidation, updateUserValidation } from "./demoValidator.js";



const router=express.Router();
    router.get('/users',findUser);
    router.get('/users/:id', userByIdValidation,userById);
    router.delete('/users/:id', deleteUserValidation,deleteUser);
    router.put('/users/:id',updateUserValidation,updateUser);
    router.post('/register',addUserValidation,addUser);

export default router