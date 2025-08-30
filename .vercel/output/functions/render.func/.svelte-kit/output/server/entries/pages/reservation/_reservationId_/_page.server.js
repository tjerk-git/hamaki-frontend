import { A as API_BASE_URL, a as API_VERSION } from '../../../../chunks/private.js';
async function load({ fetch, params }) {
	const url = `${API_BASE_URL}/${API_VERSION}/reservation/${params.reservationId}`;
	const reservation = {};
	try {
		const res = await fetch(url);
		const reservation2 = await res.json();
		const reservationId = params.reservationId;
		if (!res.ok) {
			throw Error('404');
		}
		console.log(reservation2);
		return { reservation: reservation2, reservationId };
	} catch (error) {
		return reservation;
	}
}
export { load };
