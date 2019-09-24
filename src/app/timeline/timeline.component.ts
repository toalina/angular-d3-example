import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as d3timelines from 'd3-timelines';
import { TimelineDataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnChanges {
  @ViewChild('timelineChart')
  // private chartContainer: ElementRef;

  @Input() data: TimelineDataModel[];

  // private data: any = [
  //     {label: 'person a', times: [
  //         {starting_time: 1355752800000, ending_time: 1355759900000},
  //         {starting_time: 1355767900000, ending_time: 1355774400000}]},
  //     {label: 'person b', times: [
  //         {starting_time: 1355759910000, ending_time: 1355761900000}]},
  //     {label: 'person c', times: [
  //         {starting_time: 1355761910000, ending_time: 1355763910000}]},
  //     ];

  // private chart: any;
  constructor() {
    console.log(this.data)
  }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.buildTimeline();
  }

  private buildTimeline(): void {

    d3.select('svg1').remove();
    const data = this.data;

    const chart = d3timelines.timelines();

    const svg1 = d3.select('#timeline').append('svg').attr('width', 500).attr('height', 500).datum(data).call(chart);
  }
}

