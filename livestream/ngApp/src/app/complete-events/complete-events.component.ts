import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complete-events',
  templateUrl: './complete-events.component.html',
  styleUrls: ['./complete-events.component.css']
})
export class CompleteEventsComponent implements OnInit {


  url = `http://localhost:8080/ca/getFinalAllFlags`;
  events: any;
  flags = [];
  sample : any;
  
  completeEvents = []

  constructor(private _eventService: EventService, private http: HttpClient ,
              private _router: Router) { }

  ngOnInit() {
/*     this._eventService.getcompleteEvents()
      .subscribe(
        res => this.completeEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      ) */ 


      this.http.get(this.url).toPromise().then(data => {
        console.log(data);
        this.sample = data['allFlags']
      });
      
    }
  
  }
  
  






      // this._eventService.getFlags()
      // .subscribe(
      //   res => this.flags = res,
        
      //   err => {
      //     if( err instanceof HttpErrorResponse ) {
      //       if (err.status === 401) {
      //         this._router.navigate(['/login'])
      //                               }
      //                                            }
      //         }
      // )
      // console.log(this.flags);
    
  //     console.log(data['allFlags[0].'name'']);
       
        // console.log(sample);
        // console.log(sample[0].name);
        //const name1 = sample[0].name;

       // console.log(name1);
      //  var datain = JSON.stringify(data);
      //  var datain1 = JSON.parse(datain);
      //  document.write(data["allFlags"]+ "<br>");
       
     
        
     /*     for (let key in data)
          if (data.hasOwnProperty(key))
            this.events.push(data[key]);

            console.log(this.events);  */
            
     
     

