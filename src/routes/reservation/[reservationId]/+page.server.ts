import { API_BASE_URL } from '$env/static/private';
import { API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/${API_VERSION}/reservation/${params.reservationId}`;
    const reservation = {};

    try {
        const res = await fetch(url);
        const reservation = await res.json();
        const reservationId = params.reservationId;

        if (!res.ok) {
            throw Error("404");
        }

        return { reservation, reservationId };
    } catch (error) {
        return reservation;
    }

}




