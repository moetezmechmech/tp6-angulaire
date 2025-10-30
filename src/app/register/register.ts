import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
 imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  
})
export class Register implements OnInit{
[x: string]: any;
public user = new User(); 
confirmPassword?:string; 
myForm!: FormGroup;
 constructor(private formBuilder: FormBuilder) { }
ngOnInit(): void {
   this.myForm = this.formBuilder.group({ 
    username : ['', [Validators.required]],
    email : ['', [Validators.required,
    Validators.email]], password : ['',
    [Validators.required, Validators.minLength(6)]],
     confirmPassword : ['', [Validators.required]]
     } ); 
    
    }
    OnRegister()
     { console.log(this.user);

    }
    }
