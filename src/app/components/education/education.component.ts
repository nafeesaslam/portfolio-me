import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  contextId : any
  title = ''
  addr = ''
  academy_level = ''
  subjects:any = []
  hls = [
    {sub:'English',marks:95},
    {sub:'Mathematics',marks:86},
    {sub:'Science',marks:82},
  ]
  tu = [
    {sub:'English',marks:68},
    {sub:'Mathematics',marks:65},
    {sub:'Physics',marks:66},
  ]
  kl = [
    {sub:'English',marks:86},
    {sub:'Mathematics',marks:45},
    {sub:'Physics',marks:54},
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.checkContextId()
    console.log(this.contextId);
    this.setDataOnDOM(this.contextId)
  }

  checkContextId(){
    this.route.params.subscribe((param) => {
        return  this.contextId = param['id']    
    })
  }

  setDataOnDOM(contextId:any){
      if (contextId == '3'){
        console.log(contextId);
        this.academy_level = 'Senior_Seconadry'
        this.title = 'Holy Cross School'
        this.addr = 'West Bokaro, Ghatotand, Jharkhand'
        this.subjects = this.hls
      } else if (contextId == 2){
        this.academy_level = 'Higher_Seconadry'
        this.title = 'Kalyan Central Model Public School'
        this.addr = 'Nadia, West Bengal'
        this.subjects = this.kl
      } else {
        this.academy_level = 'Graduation'
        this.title = 'Thiruvalluvar University'
        this.addr = 'Thiruvalluvar, Vellore, Tamil Nadu'
        this.subjects = this.tu
      }
  }
}
