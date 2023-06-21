import { API_BASE_URL } from '$env/static/private';
import { API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/${API_VERSION}/reservation/${params.reservationId}`;

    try {
        const res = await fetch(url);
        const reservation = await res.json();
        const reservationId = params.reservationId;

        return { reservation, reservationId };
    } catch (error) {
        const reservation = {};
        return reservation;
    }

}




