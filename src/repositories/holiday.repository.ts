import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CreateHolidayDto } from "../dto/holiday.dto";
import { prismaClient } from "../prisma/client";
import { BadRequestError, ConflictError } from "../utils/errors/app.error";

export const createHoliday = async (paylod: CreateHolidayDto) => {
    try {
        const center = await prismaClient.holiday.create({
            data: {
                name: paylod.name,
                date: new Date(paylod.date),
                center: {
                    connect: {
                        id: paylod.centerId
                    }
                }
            },
            select: {
                id: true,
                name: true,
                date: true,
                centerId: true
            }
        });
        return center;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new ConflictError("A holiday already exists for this center on the specified date. Please choose a different date.")
            }
            if (error.code === 'P2025') {
                throw new BadRequestError("The specified center ID does not exist. Please provide a valid centerId.")
            }
        }
    }
}