import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public loginForm: FormGroup;
  public user: User;
  public submitted: boolean;
  public error: string;

  constructor(private fb: FormBuilder,
    private landingService: LandingService) {
      this.user = <User>{};
     }

  ngOnInit() {
    this.loadForm();
  }

  /**
   * Función que carga el formulario
   */
  public loadForm() {
    this.loginForm = this.fb.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required]
    });
  }

  /**
   * Función que hace el login
   */
  public login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      Object.assign(this.user, this.loginForm.value)
      this.landingService.doLogin(this.user.username, this.user.password).subscribe(res => {
        console.log(res);
      }, (err => {
        this.error = err;
      }));
    }
  }

}
