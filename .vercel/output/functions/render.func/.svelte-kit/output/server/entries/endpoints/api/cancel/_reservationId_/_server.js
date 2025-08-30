import { A as API_BASE_URL } from '../../../../../chunks/private.js';
const DELETE = async ({ params }) => {
	try {
		const res = await fetch(`${API_BASE_URL}/api/v1/reservation/delete/${params.reservationId}`, {
			method: 'DELETE'
		});
		const cancelResponse = await res.json();
		console.log(cancelResponse);
		return new Response(cancelResponse);
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
export { DELETE };
