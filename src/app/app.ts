import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titulo } from './titulo/titulo';
import { NavegationBar } from './navegation-bar/navegation-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Titulo, NavegationBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'portfolio';
  city = 'Barcelona'
}
