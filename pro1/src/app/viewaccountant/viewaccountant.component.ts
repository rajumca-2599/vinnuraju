import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServoService } from '../servo.service';

@Component({
  selector: 'app-viewaccountant',
  templateUrl: './viewaccountant.component.html',
  styleUrls: ['./viewaccountant.component.css']
})
export class ViewaccountantComponent implements OnInit {
  data:any=[]

  constructor(private sr:ServoService, private route:Router) { }

  ngOnInit(): void {
    this.reloaddata()
    

  }
  reloaddata(){
    this.sr.getdata().subscribe(e=>this.data=e)

  }
  deleteemployee(id:number){
    this.sr.deleteemp(id).subscribe(data => {
      console.log(data);
      this.reloaddata();
      

    },
    error =>console.log(error));
  }
  updateemployee(id:any){
    this.route.navigate(['admin1/addaccountant',id]);
  }
 adding(){
   this.route.navigate(["admin1/feereport"])
   this.reloaddata()
 }
}
