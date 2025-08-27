import { Component } from '@angular/core';
import { ApexFeatures } from '../apex-features/apex-features';
import { ApexWhyUse } from '../apex-why-use/apex-why-use';
import { CTA } from '../cta/cta';
import { ApexHero } from '../apex-hero/apex-hero';

@Component({
  selector: 'app-apex-landing-page',
  imports: [ApexFeatures, ApexWhyUse, CTA, ApexHero],
  templateUrl: './apex-landing-page.html',
  styleUrl: './apex-landing-page.css'
})
export class ApexLandingPage {

}
