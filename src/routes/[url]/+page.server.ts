
import { API_BASE_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/calendar/${params.url}`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw error(404, {
                message: "📅 Whoops, we can't find this calendar, sorry"
            });
        }

        const calendar = await res.json();

        return { calendar };
    } catch (things) {
        throw error(404, {
            message: "📅 Whoops, we can't find this calendar, sorry"
        });
    }


}

