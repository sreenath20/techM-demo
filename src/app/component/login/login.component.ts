import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User = new User();

  constructor(private formBuilder: FormBuilder) {
    console.log('login component constructor()')
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    // console.log('login component ngOnInit()')
    // this.form = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern("[^@]*@[^@]")]],
    //   password: ['', Validators.required, Validators.minLength(8)],
    // });
  }
  login() {

    console.log(`Login ${this.form?.value}`);
    if (this.form.valid) {
      this.user.email= this.form.value.email;
      this.user.password = this.form.value.password;

      // subscribe to login service

    }
  }
}
