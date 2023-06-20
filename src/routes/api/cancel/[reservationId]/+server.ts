import { API_BASE_URL } from '$env/static/private';
import type { RequestHandler } from '../$types';

export const DELETE = (async ({ params }) => {
    //console.log(params.reservationId)

    try {
        console.log (params);
        console.log (`${API_BASE_URL}/api/v1/reservation/delete/${params.reservationId}`);
        const res = await fetch(`${API_BASE_URL}/api/v1/reservation/delete/${params.reservationId}`, {
            method: 'DELETE'
        }); 

        
        const cancelResponse = await res.json();
        //console.log(calendar.groupedSpots[0].day);

        console.log(cancelResponse);
        // return { cancelResponse };

        return new Response(cancelResponse);
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }

}) satisfies RequestHandler;