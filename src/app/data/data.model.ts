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

// private data: any = [
//     {label: 'person a', times: [
//         {starting_time: 1355752800000, ending_time: 1355759900000},
//         {starting_time: 1355767900000, ending_time: 1355774400000}]},
//     {label: 'person b', times: [
//         {starting_time: 1355759910000, ending_time: 1355761900000}]},
//     {label: 'person c', times: [
//         {starting_time: 1355761910000, ending_time: 1355763910000}]},
//     ];
