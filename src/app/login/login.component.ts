import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { LoginService } from './login.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public request;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService :LoginService) { }
  loginForm: FormGroup;

  ngOnInit() {
  }

  iniciar(){
    this.router.navigateByUrl('/articles');
  }

  buscar(){
    console.log('autenticando')
    this.loginService.obtenerProductos().subscribe(dataFinal => {
      console.log('dataFinal')
    },
    error => {
      console.log(error)
    });
  }


}
