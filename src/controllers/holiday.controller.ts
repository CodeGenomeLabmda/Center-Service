import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
import { createHolidayService } from "../services/holiday.service";

export const createHolidayHandler = async (req: Request, res: Response, next: NextFunction) => {
    const center = await createHolidayService(req.body);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Holiday created successfully!",
        data: center
    });
}