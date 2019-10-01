import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { IncidentReport } from './data/incident-report'
import { IncidentDataModel } from './data/data.model';

@Injectable({
  providedIn: 'root'
})

export class IncidentCallService {
  // incidentData: Observable<IncidentDataModel>;

  constructor(private httpClient: HttpClient) { }

  getInitialIncidentReports() {
    // this.httpClient.get<IncidentReport[]>('https://data.seattle.gov/resource/fire-911.json')

    return this.httpClient.get<IncidentDataModel[]>('https://data.seattle.gov/resource/fire-911.json')
  }
}
