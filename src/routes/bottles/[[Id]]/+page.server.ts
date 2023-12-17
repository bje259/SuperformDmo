/* eslint-disable @typescript-eslint/no-unused-vars */

import { superValidate, message } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

import { bottles, bottleId, bottleSchema } from '$lib/bottles';

const crudSchema = bottleSchema.extend({
	Id: bottleSchema.shape.Id.optional()
});

export const load = async ({ url, params }) => {
	// READ user
	const bottle = bottles.find((u) => u.Id == params.Id);

	if (params.Id && !bottle) throw error(404, 'Bottle not found.');

	// If user is null, default values for the schema will be returned.
	const form = await superValidate(bottle, crudSchema);
	return { form, bottles };
};
