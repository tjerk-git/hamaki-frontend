import { API_BASE_URL } from '$env/static/private';
import { API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/${API_VERSION}/reservation/${params.reservationId}`;

    try {
        const res = await fetch(url);
        const reservation = await res.json();
        //console.log(calendar.groupedSpots[0].day);

        //console.log(reservation);
        return { reservation };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }

}




