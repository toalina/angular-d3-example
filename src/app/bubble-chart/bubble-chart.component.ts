import { Component, OnInit, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { BubbleDataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnChanges {

  @ViewChild('bubbleChart')
  // private chartContainer: ElementRef;

  @Input() data: BubbleDataModel[];

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() {
    console.log(this.data)
   }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.createChart();
  }

  private createChart(): void {
    // const d3 = require('d3')
    d3.select('svg2').remove();

    const data = this.data;
    
    const svg2 = d3.select('#bubbleChart').append('svg').attr('width', 500).attr('height', 500).style('background-color', '#77815c');

    svg2.selectAll('circle').data(data).enter()
      .append('circle')
      .attr('id', function(d) {return d.letter; })
      .attr('cx', function(d) {return d.frequency * 500; })
      .attr('cy', function(d) {return d.frequency * 5000; })
      .attr('r', function(d) {return d.frequency * 100; })
      .attr('fill', function(d) {return d.color; })
      .append('svg:title')
      .text(function(d) { return d.letter; })

  }
}
