import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 

  title = 'For loop'; 
  users = ['Anil','Anila','Anilaaa','Ani','Ana'];
  userDetails=[
    {name:'Anil',email:'a@gmail.com',phone:'99'},
    {name:'Anila',email:'a@gmail.com',phone:'999'},
    {name:'Anilaaa',email:'a@gmail.com',phone:'99'},
    {name:'Ani',email:'a@gmail.com',phone:'99'},
    {name:'Ana',email:'a@gmail.com',phone:'99'},
  ]*/

  // color= "green";
  
  // title:string  = 'Blog ';
  // data= "code step by step"
/*
  getName(){
    alert("fucntion called");
  }
  getAge(age:number){
    alert(age);
  }
  getData(val:string){
    console.warn(val);
  }
  
// to get the value called by the function
title : string = 'get input box value';
displayVal=' ';
  getValue(val:string){
    console.warn(val)
    this.displayVal=val
  }
  count=0
  counter(type:string){
    type=='add' ? this.count++ : this.count--;
  }

  name="aryan"
  disable=false;

  show=true
  */

  /*
  title='style Binding';
  color="red";
  bgColor='green'; 

  updateColor(){
    this.color="blue"
    this.bgColor="pink"
  }
  */
  title='Header';
  userData:any={};
  getData(data:NgForm){
    console.log(data)
    this.userData=data
  }
  display=false
  toggle(){
    this.display=!this.display
  }

  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.log(this.list)
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}

// Interpolation works numeric and string value while property binding works on boolean too
