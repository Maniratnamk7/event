import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  events:any;

  constructor(private service :EventService, private router : Router){
    
    this.service.getAllEvents().subscribe((data:any)=>{
      console.log(data);
      this.events = data;
    })
  }
  ngOnInit(): void {
  //   let EventData = JSON.parse(localStorage.getItem('Event') || '{}' );
  //   this.Event = EventData;
  //   localStorage.setItem("Event", JSON.stringify(Event));
  //   console.log(EventData);
   }
   cancelEvent(eventId: number){
    this.service.cancelEvent(eventId).subscribe((data)=>{
    const index = this.events.findIndex((event:any)=>{
        return event.eventId === eventId;
      });
      this.events.splice(index,1);
    });
    }

}
