import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

  }

  salir(){
    this.router.navigateByUrl('/login');
  }

  buscar(){
    console.log('Buscado')
    this.loginService.autenticarService('conectando')
    
    
  }

}
