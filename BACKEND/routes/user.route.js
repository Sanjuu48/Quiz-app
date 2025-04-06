import express from "express"
import {createUser,getUser,deleteUser,updateUser} from "../controller/product.controller.js";

const router=express.Router();

router.get("/", getUser)

router.post("/", createUser);

router.put("/:_id", updateUser);

router.delete("/:_id", deleteUser);


export default router;