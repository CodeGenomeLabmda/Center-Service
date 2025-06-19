import { z } from "zod";
const e164PhoneRegex: RegExp = /^\+?[1-9]\d{1,14}$/;

export const createCenterSchema = z.object({
    name: z.string({ message: "name is required!" }),
    location: z.string({ message: "location is required!" }),
    contactNumber: z.string().regex(e164PhoneRegex, { message: 'Invalid E.164 phone number format' }).optional()
});

export const updateCenterSchema = z.object({
    name: z.string({ message: "name is required!" }).min(1, { message: "name length must be greater than 1" }),
    location: z.string({ message: "location is required!" }).min(1, { message: "location length must be greater than 1" }),
    contactNumber: z.string().regex(e164PhoneRegex, { message: 'Invalid E.164 phone number format' })
}).partial();