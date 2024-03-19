import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

	const data = await axios.get(`https://dummyjson.com/products/${params.slug}`)

	const content = `Content for ${params.slug} goes here`
	const title = `Title for ${params.slug} goes here`

	return {
		slug: params.slug,
		title,
		content,
		data
	};
}