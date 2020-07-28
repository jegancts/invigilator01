import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../event.service';
import * as io from 'socket.io-client';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit  {
  public socket: any;
  public outimg : string = '';

  events = []


  public ngOnInit(): void { 
    this.socket.on('image_out', (message) => {
      this.outimg = "data:image/png;base64,"+message;
    })
  }
  constructor(private _eventService: EventService,private router: Router, private http: HttpClient ) {
    
    this.socket = io('http://localhost:5000', { transports: ['polling'] })
    
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )

  }
  
public freeze(): void{
  this.socket.emit('freeze', 'freeze');
}

public unfreeze(): void{
  this.socket.emit('unfreeze', 'unfreeze');
}
/*   url = 'http://localhost:3001';
  public transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url); */
}

/*   ngOnInit() {

    this.safeurl = this._sanitizer.bypassSecurityTrustUrl('http://localhost:3001')

    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )

        } */

    

