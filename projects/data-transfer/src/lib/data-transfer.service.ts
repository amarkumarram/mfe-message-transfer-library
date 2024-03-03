import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  
  private hostData = new BehaviorSubject({});
  private mfeData = new BehaviorSubject({});

  constructor() { }

  // This is to set data at HOST side
  setHostToMfeData(data: any) {
    this.hostData.next({
      value: data
    })
  }

  // This is to get data at MFE side that is set at HOST side
  getHostToMfeData(): Observable<object> {
    return this.hostData;
  }

  // This is to set data at MFE side
  setMfeToHostData(data: any) {
    this.mfeData.next({
      value: data
    })
  }

  // This is to get data at HOST side that is set at MFE side
  getMfeToHostData(): Observable<object> {
    return this.mfeData;
  }
}
