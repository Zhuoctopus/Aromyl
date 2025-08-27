import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Landing } from './main-features/landing-page/landing/landing';
import { ApexLandingPage } from './main-features/apex-landing/apex-landing-page/apex-landing-page';

export const routes: Routes = [
    {
        path: '', 
        component: Layout,
        children: [
            {
                path: '',
                component: Landing,
            },
            {
                path: 'apex-model',
                component: ApexLandingPage,
            }
        ]
    }
];
