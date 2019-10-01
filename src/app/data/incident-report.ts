export class IncidentReport {
    address: string;
    type: string;
    datetime: string | Date;
    latitude: number;
    longitude: number;
    report_location: {
        type: "Point",
        coordimates: number[];
    };
    incident_number: string;
}