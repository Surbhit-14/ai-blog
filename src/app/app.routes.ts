import { Routes } from '@angular/router';
import { SubscribeComponent } from './compponnents/subscribe/subscribe.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './compponnents/about/about.component';

export const routes: Routes = [

    {
        path:'',
        component:ContentComponent
    },
    {
        path:'app-subscribe',
        component:SubscribeComponent
    },
    {
        path:'app-about',
        component:AboutComponent
    },
];
