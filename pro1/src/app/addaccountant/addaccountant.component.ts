import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServoService } from '../servo.service';

@Component({
  selector: 'app-addaccountant',
  templateUrl: './addaccountant.component.html',
  styleUrls: ['./addaccountant.component.css']
})
export class AddaccountantComponent implements OnInit {
  id: number=0;
  emp1: any;

  constructor(private sr:ServoService,private route:Router,private rc:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.rc.snapshot.params['id'];
    this.sr.getemployee(this.id).subscribe(e=>this.emp1=e);
  }
  update1(){
    this.sr.getupdate(this.id,this.emp1).subscribe((a)=>console.log(a))
    this.route.navigate(['admin1/viewaccountant'])

  }


}
// 