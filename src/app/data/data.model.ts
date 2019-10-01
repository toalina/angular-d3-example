export interface BubbleDataModel {
    letter: string;
    frequency: number;
    color: string;
}

interface StartEndTimes {
    starting_time: number,
    ending_time: number,
    display: string
}

export interface TimelineDataModel {
    label: string,
    times: Array<StartEndTimes>;
    // times: { starting_time: number, ending_time: number }[]
}

export interface IncidentDataModel {
    address: string;
    type: string;
    datetime: string | Date;
    latitude: number;
    longitude: number;
    report_location: {
        type: "Point",
        coordinates: number[];
    };
    incident_number: string;
    times: Array<StartEndTimes>;
    // label: string;
    // times: { starting_time: number, ending_time: number, display: string }[]
}



