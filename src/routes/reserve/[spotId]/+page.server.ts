import { API_BASE_URL } from '$env/static/private';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const email = data.get('email');
        const name = data.get('name');
        const comment = data.get('comment');
        const timezone = data.get('timezone');

        const formData = {
            visitorEmail: email,
            visitorName: name,
            comment: comment,
            timezone: timezone,
            spotId: params.spotId,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/spots/reserve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status !== 200) {
                const errorData = await response.json();
                console.error('Error:', errorData);
                return { success: false, data: errorData };
            }

            const responseData = await response.json();

            return { success: true, data: responseData };
        } catch (error) {
            console.error('Error:', error);
            // Handle any errors that occurred during the request

            return { success: false, data: error };
        }
    },
} satisfies Actions;

