import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TimelineDataModel, BubbleDataModel, IncidentDataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: Observable<BubbleDataModel>;
  timelineData: Observable<TimelineDataModel>;
  incidentData: Observable<IncidentDataModel>;
  
  constructor(private http: HttpClient) {

    this.data = this.http.get<BubbleDataModel>('assets/data.json');
    this.timelineData = this.http.get<TimelineDataModel>('assets/timeline-data.json');
    
    this.incidentData = this.http.get<IncidentDataModel>('assets/incident-response-data.json');
    // this.incidentData = this.http.get<IncidentDataModel>('https://data.seattle.gov/resource/fire-911.json');
  }
}
