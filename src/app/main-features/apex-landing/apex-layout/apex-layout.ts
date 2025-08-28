import { Component } from '@angular/core';
import { SubHeader } from '../sub-header/sub-header';
import { Footer } from '../../../footer/footer';
import { Header } from "../../../header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-apex-layout',
  imports: [SubHeader, Footer, RouterOutlet],
  templateUrl: './apex-layout.html',
  styleUrl: './apex-layout.css'
})
export class ApexLayout {

}
