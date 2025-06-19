import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createCenterService } from "../services/center.service";

export const createCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    const center = await createCenterService(req.body);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Center created successfully!",
        data: center
    })
}