import { Prisma } from "@prisma/client";
import { createCenter, updateCenter } from "../repositories/center.repository";

export const createCenterService = async (paylod: Prisma.CenterCreateInput) => {
    const center = await createCenter(paylod);
    return center;
}

export const updateCenterService = async (id: string, paylod: Prisma.CenterCreateInput) => {
    const center = await updateCenter(id, paylod);
    return center;
}