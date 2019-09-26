export interface BubbleDataModel {
    letter: string;
    frequency: number;
    color: string;
}

export interface TimelineDataModel {
    label: string,
    times: Array<StartEndTimes>;
    // times: { starting_time: number, ending_time: number }[]
}

interface StartEndTimes {
    starting_time: number,
    ending_time: number
}

export class IncidentDataModel {
    address: string;
    type: string;
    datetime: string | Date;
    latitude: number;
    longitude: number;
    report_location: {
        type: "Point",
        coordimates: [
            number, number
        ]
    };
    incident_number: string;
}
