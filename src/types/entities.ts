import { object, string, number, InferType } from 'yup';

export const userSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    age: number().required().positive().integer(),
});

export type User = InferType<typeof userSchema> & { id: string }
