import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createCenterService, getAllCentersService, updateCenterService } from "../services/center.service";
import { validate as isValidUUID } from "uuid";
import { BadRequestError } from "../utils/errors/app.error";

export const createCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    const center = await createCenterService(req.body);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Center created successfully!",
        data: center
    });
}

export const updateCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params.id)
    if (!isValidUUID(req.params.id)) {
        throw new BadRequestError("Id is not a valid uuid!");
    }
    const center = await updateCenterService(req.params.id, req.body);
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Center created successfully!",
        data: center
    });
    res.status(StatusCodes.NOT_IMPLEMENTED).send("Not yet implemented!");
}

export const getAllCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    const centers = await getAllCentersService();
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Got all centers successfully!",
        data: centers
    });
}