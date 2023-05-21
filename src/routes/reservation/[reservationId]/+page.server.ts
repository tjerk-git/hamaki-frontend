// @TODO make this come from env file?
import { API_BASE_URL } from '$lib/variables';
import { API_VERSION } from '$lib/variables';

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




