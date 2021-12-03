import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServoService } from '../servo.service';

@Component({
  selector: 'app-feereport',
  templateUrl: './feereport.component.html',
  styleUrls: ['./feereport.component.css']
})
export class FeereportComponent implements OnInit {
  emp2={
    name:"",
    email:"",
    password:"",
    address:"",
    contact:""


  }

  constructor(private sr:ServoService,private route:Router) { }

  ngOnInit(): void {
  }
  update2(){
  this.sr.postdata(this.emp2).subscribe((a)=>console.log(a));
  this.route.navigate(["admin1/viewaccountant"])
  }

}
