import { Component } from '@angular/core';
import { Intro } from '../intro/intro';
import { Hero } from '../hero/hero';
import { Features } from '../features/features';

@Component({
  selector: 'app-landing',
  imports: [Hero, Intro, Features],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
