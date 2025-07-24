import { Routes } from '@angular/router';

export const routes: Routes = [
    /**{
        path:'',
        loadChildren : ()=> import('../app/modules/landing/home/home.routes'),
    },*/
    {
        path:'',
        loadChildren : ()=> import('../app/modules/pages/info-page/infos-page.routes'),
    },
    {
        path:'faq',
        loadChildren : ()=> import('./modules/pages/faq/faq.routes'),
    },
    {   
        path : '**', 
        loadChildren : () => import('../app/modules/pages/error/error.routes') 
    }
];
