import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myform:FormGroup
  
  ngOnInit()
  { 
    this.myform=new FormGroup({
        'name':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,Validators.required),
        'message':new FormControl(null,[Validators.required,Validators.minLength(5)])
      });
  }
  
  formmy(){
    console.log(this.myform.value);
    this.myform.reset()
  }
}
