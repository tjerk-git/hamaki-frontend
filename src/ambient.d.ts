// types.d.ts


interface Spot {
    spotId: string;
    isReserved: boolean;
    calendarId: string;
    startDate: Date;
    endDate: Date;
    location: String;
};

interface Owner {
    email: string;
    description: string;
    appId: string;
};


interface Calendar {
    name: string;
    spots: Spot[];
    url: string;
    owner: Owner;
    clientId: string;
    backendId: string;
};
