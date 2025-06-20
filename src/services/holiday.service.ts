import { CreateHolidayDto } from "../dto/holiday.dto";
import { createHoliday } from "../repositories/holiday.repository";

export const createHolidayService = async (paylod: CreateHolidayDto) => {
    const center = await createHoliday(paylod);
    return center;
}