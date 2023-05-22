// @TODO make this come from env file?
import { API_BASE_URL } from '$lib/variables';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/calendar/${params.url}`;

    try {
        const res = await fetch(url);
        const calendar = await res.json();

        //console.log(calendar)
        //console.log(calendar.groupedSpots[0].day);
        return { calendar };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
}

