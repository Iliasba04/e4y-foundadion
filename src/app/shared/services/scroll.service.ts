import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class ScrollService {

    constructor(private router: Router){

        this.router.events.subscribe( event => {
            if(event instanceof NavigationEnd){
                const fragment = this.router.parseUrl(this.router.url).fragment;
                if(!fragment){
                    window.scrollTo({
                        top: 0,
                        behavior:'smooth'
                    });
                }
            }
        })
    }
}