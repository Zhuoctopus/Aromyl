import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
