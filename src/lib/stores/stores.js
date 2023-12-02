import { writable } from 'svelte/store';

export const calendarName = writable('');
export const selectedSpot = writable({});
export const selectedWaitingListDay = writable({});