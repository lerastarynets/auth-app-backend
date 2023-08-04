import express from "express";
import { authRouter } from "./authRoutes.js";

export const router = express.Router();

router.use('/auth', authRouter);