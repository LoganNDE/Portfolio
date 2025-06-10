import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titulo } from './titulo/titulo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Titulo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'portfolio';
  city = 'Barcelona'
}
