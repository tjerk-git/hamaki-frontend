import getUserLocale from 'get-user-locale';

const getCorrectDate = (spotDate, dateOptions) => {

    const timestamp = spotDate;
    const date = new Date(timestamp);
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userLocale = getUserLocale();

    const timeZoneOptions = {
        timeZone: userTimezone,
    };

    const finalOptions = { ...dateOptions, ...timeZoneOptions };

    const humanDate = date.toLocaleString(userLocale, finalOptions);

    return humanDate;
};

export default getCorrectDate;