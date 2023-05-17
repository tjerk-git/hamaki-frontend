// @TODO make this come from env file?
import { API_BASE_URL } from '$lib/variables';

// const jsonResponse = {
//     "backendId": "c33c4878-2264-4f25-9f13-8a3cfa65157d",
//     "clientId": "abc123",
//     "name": "My Calendar",
//     "url": "https://example.com/calendar",
//     "description": "This is a calendar for scheduling events.",
//     "owner": {
//         "description": "Calendar owner",
//         "email": "owner@example.com",
//         "appId": "xyz789"
//     },
//     "spots": [
//         {
//             "spotId": "6a24a12d-d292-4c07-91a7-50db3b672792",
//             "startDate": "2023-05-16T09:00:00Z",
//             "endDate": "2023-05-16T12:00:00Z",
//             "calendarId": "c33c4878-2264-4f25-9f13-8a3cfa65157d",
//             "reservation": {
//                 "reservationId": "e5b3213f-28e6-4a34-a0f8-9583d419c12a",
//                 "startTime": "2023-05-16T10:00:00Z",
//                 "endTime": "2023-05-16T11:00:00Z",
//                 "reservedBy": "John Doe"
//             }
//         },
//         {
//             "spotId": "86ef3d71-8d21-4c0c-9583-1f5a64307e97",
//             "startDate": "2023-05-17T14:00:00Z",
//             "endDate": "2023-05-17T16:00:00Z",
//             "calendarId": "c33c4878-2264-4f25-9f13-8a3cfa65157d",
//             "reservation": null
//         }
//     ]
// };

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const url = `${API_BASE_URL}/calendar/${params.url}`;

    try {
        const res = await fetch(url);
        const calendar = await res.json();

        return { calendar };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
}