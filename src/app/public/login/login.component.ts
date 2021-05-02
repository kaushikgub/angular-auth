import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: null,
      password: null
    });
  }

  submit() {
    console.log(this.form?.getRawValue())
    this.userService.loginAttempt(this.form.getRawValue()).subscribe(
      (result: any) => {
        console.log(result);
        localStorage.setItem("token", result.toString());
        this.router.navigate(["home"]);
      }, error => {
        console.log(error)
      }
    )
  }

}
