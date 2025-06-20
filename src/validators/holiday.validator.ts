import { z } from "zod";
const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/;

export const createHolidaySchema = z.object({
    name: z.string({ message: "name is required" }),
    date: z.string().regex(yyyyMmDdRegex, { message: "Date must be in YYYY-MM-DD format" }),
    centerId: z.string().uuid({ message: "centerId should be a valid uuid" })
});