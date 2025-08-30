import { A as API_BASE_URL } from '../../../chunks/private.js';
import { e as error } from '../../../chunks/index.js';
async function load({ fetch, params }) {
	try {
		const url = `${API_BASE_URL}/calendar/${params.url}`;
		const res = await fetch(url);
		if (!res.ok) {
			throw error(404, {
				message: "📅 Whoops, we can't find this calendar, sorry"
			});
		} else {
			const data = await res.json();
			return data;
		}
	} catch (error2) {
		console.error('Error occurred during data retrieval:', error2);
	}
}
export { load };
