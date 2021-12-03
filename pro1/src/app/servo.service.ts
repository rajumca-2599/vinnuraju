import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServoService {
  burl="http://localhost:3000/accountants"
  aurl="http://localhost:3000/students";

  constructor(private http:HttpClient) { }
 getdata(){
   return this.http.get(this.burl)
 }
 deleteemp(id:any){
   return this.http.delete(`${this.burl}/${id}`);
 }
 getupdate(id:number,value:any){
  return this.http.put(`${this.burl}/${id}`,value);
}
getemployee(id:number){
  return this.http.get(`${this.burl}/${id}`);
}
postdata(value:any){
  return this.http.post(this.burl,value)
}
getdata1(){
  return this.http.get(this.aurl)
}
postdata1(emp2:any){
  return this.http.post(this.aurl,emp2)
}
deleteemp1(id:any){
  return this.http.delete(`${this.aurl}/${id}`);
}
}
