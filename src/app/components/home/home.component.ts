import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DatetoagePipe } from 'src/app/pipes/datetoage.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todaysdate = new Date()
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateWithId(id:Number){
    let contextId = id
    this.router.navigate(['/education',contextId])
  }
}
