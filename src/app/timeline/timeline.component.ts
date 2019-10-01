import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3timelines from 'd3-timelines';
import { TimelineDataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnChanges {
  @ViewChild('timeline')
  @Input() data: TimelineDataModel[];

  constructor() {}

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.buildTimeline();
  }

  private buildTimeline(): void {

    d3.select('svg1').remove();
    const data = this.data;

    const chart = d3timelines.timelines()
      .margin({left: 80, right: 0, top: 50, bottom: 0})
      .stack()
      .showTimeAxisTick();

    const svg1 = d3.select('#timeline').append('svg').attr('width', 800).attr('height', 300).datum(data).call(chart);
  }
}

