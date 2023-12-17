/* eslint-disable @typescript-eslint/no-unused-vars */
// import { bottleIdGen } from './bottleDB';

// export const bottleDBSchema = z.object({
// 	Id: z.string().regex(/^\d+$/),
// 	Name: z
// 		.string()
// 		.min(1, { message: 'Name cannot be empty' })
// 		.max(30, { message: 'Name cannot be longer than 30 characters' }),
// 	Producer: z
// 		.string()
// 		.min(1, { message: 'Producer cannot be empty' })
// 		.max(30, { message: 'Producer cannot be longer than 30 characters' }),
// 	Vintage: z
// 		.number()
// 		.min(1900, { message: 'Vintage must be after 1900' })
// 		.max(getYear(new Date()), { message: 'Vintage must be before the current year' })
// 		.default(2023),
// 	Purchased: z
// 		.string()
// 		.refine((v) => v)
// 		.optional(),
// 	Consumed: z
// 		.string()
// 		.refine((v) => v)
// 		.optional()
// });

// export const bottleSchema = bottleDBSchema.extend({
// 	id: z
// 		.string()
// 		.refine((v) => v)
// 		.default(bottleIdGen())
// });

// export type BottleFormSchema = typeof bottleSchema;
// export type BottleDB = z.infer<typeof bottleDBSchema>[];
