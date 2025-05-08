import { z } from "zod";

export const loginFormFieldsSchema = z.object({
    email: z.string()
        .email({ message: 'Invalid email format.' })
        .min(1, { message: 'Email is required.' }),
    password: z.string()
        .min(1, { message: 'Password is required.' })
        .min(6, { message: 'Password must be at least 6 characters long.' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
            message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        })
})

export const registerFormFieldsSchema = z.object({
    username: z.string()
        .min(3, { message: 'Username is required' }),
    email: z.string()
        .min(1, { message: "Email is required." })
        .email({ message: 'Invalid Email format.' }),
    password: z.string()
        .min(1, { message: 'Password is required.' })
        .min(6, { message: 'Password must be at least 6 characters long.' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
            message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }),
    passwordConfirm: z.string()
        .min(1, { message: 'Password is required.' })
        .min(6, { message: 'Password must be at least 6 characters long.' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
            message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }),
}).superRefine((data, ctx) => {
    // console.log(data, ctx)
    if (data.password !== data.passwordConfirm) {
        ctx.addIssue({
            path: ['passwordConfirm'],
            code: z.ZodIssueCode.custom,
            message: 'Passwords do not match.'
        });
    }
})

export const addNewItemFormFieldsSchema = z.object({
    image: z.any().optional(),
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    rentalPrice: z.string().min(1, 'Price is required'),
    deposit: z.string().min(1, 'Deposit is required'),
    // extras: z.array(z.string()).optional(),
    location: z.string().min(1, 'Location is required'),
    condition: z.string().min(1, 'Condition is required'),
})