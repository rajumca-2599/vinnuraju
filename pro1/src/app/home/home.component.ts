import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:any="";
  password:any=""
  email1:any="";
  password1:any=""

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  add(){
    if(this.email=="raju" && this.password=="raju"){
    alert(" log in success")
    localStorage.setItem('key','raju')
 this.route.navigate(["admin1"])
  }}
  add1(){
    if(this.email1=="raju" && this.password1=="raju"){
      alert(" log in success")
      localStorage.setItem('key1','raju1')
    this.route.navigate(["accountant"])
     }}

}
