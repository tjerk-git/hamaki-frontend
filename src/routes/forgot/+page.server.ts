import { API_BASE_URL } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        let urlOfCalendar = '';

        const formData = {
            email: email,
            urlOfCalendar: urlOfCalendar
        };

        try {
            const response = await fetch(`${API_BASE_URL}/calendar/forgotten`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                let errorData: any = {};

                try {
                    errorData = await response.json();
                } catch (error) {
                    console.log('Failed to parse response data:', error);
                    throw new Error('Failed to parse response data');
                }

                return { success: false, data: JSON.stringify(errorData) };
            } else {
                const responseData = await response.json();
                return { success: true, data: JSON.stringify(responseData) };
            }
        } catch (error: any) {
            return { success: false, data: JSON.stringify(error.message) };
        }
    },
};
