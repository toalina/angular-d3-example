import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3timelines from 'd3-timelines';
import { IncidentDataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-incident-timeline',
  templateUrl: './incident-timeline.component.html',
  styleUrls: ['./incident-timeline.component.css']
})

export class IncidentTimelineComponent implements OnChanges {
  @ViewChild('incidentTimeline')
  @Input() data: IncidentDataModel[];

  private parseDate;
  private formattedTime;
  private incidentDataToPlot: IncidentDataModel[] = [];

  constructor() { }

  ngOnChanges() {
    if (!this.data) { 
      console.log('No incident data');
      return; 
    }

    console.log('YES incident data')
    
    this.getIncidentDataToPlot();
    this.buildIncidentTimeline();
  }
  
  getIncidentDataToPlot() {
    this.incidentDataToPlot = this.data.slice(0, 5)
    console.log('Incident Data To Plot')
    // console.log(this.incidentDataToPlot)
    
    this.incidentDataToPlot.forEach(d => {
      
      // Convert datetime string to milliseconds
      if (typeof d.datetime === 'string') {
        this.parseDate = new Date(d.datetime);
        this.formattedTime = this.parseDate.getTime();
      }
      console.log(this.formattedTime)

      console.log(d.times)

    })

    console.log(this.incidentDataToPlot)
    return this.incidentDataToPlot;
  }

  buildIncidentTimeline() {


    d3.select('svg4').remove();
    const data = this.incidentDataToPlot;

    const chart = d3timelines.timelines()
      .stack()
      .showTimeAxisTick();
    
    const svg4 = d3.select('#incidentTimeline').append('svg').attr('width', 800).attr('height', 500).datum(data).call(chart);

  }

}
