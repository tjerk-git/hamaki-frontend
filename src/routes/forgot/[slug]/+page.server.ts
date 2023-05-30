import { API_BASE_URL } from '$env/static/private';
import type { Actions } from '../$types';

export const actions: Actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const email = data.get('email');

        const formData = {
            email: email,
            urlOfCalendar: params.slug,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/calendar/forgotten`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const responseData = await response.json();
                return { success: true, data: JSON.stringify(responseData) };
            }
        } catch (error: any) {
            return { success: true, data: JSON.stringify(error.message) };
        }
    },
};
