import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createCenterService, getAllCentersService, getCenterByIdService, updateCenterService } from "../services/center.service";
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

export const getCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    if (!isValidUUID(req.params.id)) {
        throw new BadRequestError("Id is not a valid uuid!");
    }
    const center = await getCenterByIdService(req.params.id);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: `Successfully got center with id: ${req.params.id}!`,
        data: center
    });
}