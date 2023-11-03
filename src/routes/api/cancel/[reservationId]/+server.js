import { API_BASE_URL } from '$env/static/private';


export const DELETE = (async ({ params }) => {
    //console.log(params.reservationId)

    try {
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

});