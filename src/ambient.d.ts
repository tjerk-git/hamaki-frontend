// types.d.ts

// Spot type definition
type Spot = {
    spotId: string;
    isDeleted: boolean;
    calendarId: string;
    startDate: Date;
    endDate: Date;
};

// Owner type definition
type Owner = {
    email: string;
    description: string;
    appId: string;
};

// Calendar type definition
type Calendar = {
    name: string;
    spots: Spot[];
    url: string;
    owner: Owner;
    clientId: string;
    backendId: string;
};
