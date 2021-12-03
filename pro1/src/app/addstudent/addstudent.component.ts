import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServoService } from '../servo.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  emp2={
    id:"",
    name:"",
    email:"",
    sex:"",
    course:"",
    fee:"",
    paid:"",
    due:"",
    address:"",
    contact:""


  }

  constructor(private sr:ServoService,private route:Router) { }

  ngOnInit(): void {
  }
  update2(){
    this.sr.postdata1(this.emp2).subscribe((a)=>console.log(a));
    this.route.navigate(["accountant/viewstudent"])
    console.log(this.emp2)
    }

}
