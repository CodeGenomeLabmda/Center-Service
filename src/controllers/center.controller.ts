import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger.config";

export const createCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    logger.info("Inside createCenterHandler!");
    res.status(StatusCodes.NOT_IMPLEMENTED).send("Not yet implemented!");
}