import { z } from "zod";
const e164PhoneRegex: RegExp = /^\+?[1-9]\d{1,14}$/;

export const createCenterSchema = z.object({
    name: z.string({ message: "name is required!" }),
    location: z.string({ message: "location is required!" }),
    contactNumber: z.string().regex(e164PhoneRegex, { message: 'Invalid E.164 phone number format' }).optional()
});