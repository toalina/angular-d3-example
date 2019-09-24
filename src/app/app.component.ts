import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TimelineDataModel, BubbleDataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<BubbleDataModel>;
  timelineData: Observable<TimelineDataModel>;

  constructor(private http: HttpClient) {

    this.data = this.http.get<BubbleDataModel>('assets/data.json');
    this.timelineData = this.http.get<TimelineDataModel>('assets/timeline-data.json');
    
    // this.data = this.http.get<DataModel>('assets/data.json');
  }
}
