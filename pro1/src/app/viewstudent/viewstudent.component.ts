import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServoService } from '../servo.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  data:any=[]

  constructor(private sr:ServoService,private route:Router) { }

  ngOnInit(): void {
    this.reloaddata()
  }
  reloaddata(){
    this.sr.getdata1().subscribe(e=>this.data=e)
  }
  navg(){
    this.route.navigate(["accountant/addstudent"])
  }
  del(value:any){
    this.sr.deleteemp1(value).subscribe((e)=>console.log(e))
    this.reloaddata()
  }
  delete1(value:any){
    this.route.navigate([""])
  }

}
