import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  logMessage(message: any) {
    console.log("This is from librar: ", message);
  }
}
