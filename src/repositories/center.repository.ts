import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prismaClient } from "../prisma/client";
import { ConflictError } from "../utils/errors/app.error";

export const createCenter = async (paylod: Prisma.CenterCreateInput) => {
    try {
        const center = await prismaClient.center.create({
            data: paylod,
            select: {
                id: true,
                name: true,
                location: true,
                contactNumber: true
            }
        });
        return center;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new ConflictError("A center with this name already exists. Please choose a different name")
            }
        }
    }
}

export const updateCenter = async (id: string, paylod: Prisma.CenterCreateInput) => {
    try {
        const center = await prismaClient.center.update({
            where: { id: id },
            data: paylod,
            select: {
                id: true,
                name: true,
                location: true,
                contactNumber: true
            }
        });
        return center;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new ConflictError("A center with this name already exists. Please choose a different name")
            }
        }
    }
}