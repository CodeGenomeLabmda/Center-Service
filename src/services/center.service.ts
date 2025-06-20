import { Prisma } from "@prisma/client";
import { createCenter, deleteCenterById, getAllCenters, getCenterById, updateCenter } from "../repositories/center.repository";

export const createCenterService = async (paylod: Prisma.CenterCreateInput) => {
    const center = await createCenter(paylod);
    return center;
}

export const updateCenterService = async (id: string, paylod: Prisma.CenterCreateInput) => {
    const center = await updateCenter(id, paylod);
    return center;
}

export const getAllCentersService = async () => {
    const center = await getAllCenters();
    return center;
}

export const getCenterByIdService = async (id: string) => {
    const center = await getCenterById(id);
    return center;
}

export const deleteCenterByIdService = async (id: string) => {
    const center = await deleteCenterById(id);
    return center;
}