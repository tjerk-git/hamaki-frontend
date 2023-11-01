import { API_BASE_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';


export async function load({ fetch, params }) {
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

        // const data = await res.json().then((data) => {
        //     // if (data.calendar && data.calendar.name) {
        //     //     calendarName.set(data.calendar.name);
        //     // } else {
        //     //     calendarName.set(params.url);
        //     // }

        //     return { data };
        // });

    } catch (error) {
        console.error('Error occurred during data retrieval:', error);
        // throw error(500, {
        //     message: 'Internal Server Error'
        // });
    }
}
