import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Landing } from './landing/landing';

export const routes: Routes = [
    {
        path: '', 
        component: Layout,
        children: [
            {
                path: '',
                component: Landing,
            }
        ]
    }
];
