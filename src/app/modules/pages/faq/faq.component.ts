import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  currentOpenElement : any = null;
  previousIcon : any = null;
  section:string = '';
  scrollHeight = signal(0);
  email: string = "info@e4yprogram.com";

  faqs = [
    { questions : "Qu'est-ce que le Programme E4Y ?'",
      answer : `Le Programme E4Y est une initiative visant à stimuler l'entrepreneuriat et à booster l'emploi et 
        l'autonomisation économique des jeunes, notamment des jeunes femmes au Sénégal, en Côte d’ivoire, au Bénin et au Togo.
        Nous soutenons les PME dans
        les secteurs de l'agribusiness et de l'agro-industrie pour accélérer leur croissance et augmenter leur compétitivité.`,
      toggled: false
    },
    { questions : "Qui peut participer au Programme ?'",
      answer : `Le programme est ouvert aux petites et moyennes entreprises, ainsi qu’aux 
      groupements qui opèrent dans les secteurs de l'agribusiness, de l'agro-industrie, 
      et des secteurs connexes. Les entreprises doivent démontrer un potentiel de 
      croissance et un engagement envers le développement économique et social de 
      leur communauté.`,
      toggled: false
    },
    { questions : "Qu'est-ce que le Programme E4Y ?'",
      answer : `Le Programme E4Y est une initiative visant à stimuler l'entrepreneuriat et à booster l'emploi et 
        l'autonomisation économique des jeunes, notamment des jeunes femmes au Sénégal, en Côte d’ivoire, au Bénin et au Togo.
        Nous soutenons les PME dans
        les secteurs de l'agribusiness et de l'agro-industrie pour accélérer leur croissance et augmenter leur compétitivité.`,
      toggled: false
    },
    { questions : "Qui peut participer au Programme ?'",
      answer : `Le programme est ouvert aux petites et moyennes entreprises, ainsi qu’aux 
      groupements qui opèrent dans les secteurs de l'agribusiness, de l'agro-industrie, 
      et des secteurs connexes. Les entreprises doivent démontrer un potentiel de 
      croissance et un engagement envers le développement économique et social de 
      leur communauté.`,
      toggled: false
    }
  ]

  toggleFaq(event:any,id:string){
    // Trouver l'élément associé au bouton cliqué
    const icon : HTMLElement =  event;
    var element = document.getElementById(id);
    
    // current element exist and equal to clicked element
    if (this.currentOpenElement && this.currentOpenElement === element) {
      this.currentOpenElement?.classList.remove('h-auto');
      this.currentOpenElement?.classList.add('h-0');
      this.currentOpenElement = null;
      icon.setAttribute('d' , 'M12 4.5v15m7.5-7.5h-15');
      this.previousIcon = null;
    }
    // current element exist and !== to cliqued element
    else if (this.currentOpenElement && this.currentOpenElement !== element){
      this.currentOpenElement?.classList.remove('h-auto');
      this.currentOpenElement?.classList.add('h-0');
      this.previousIcon.setAttribute('d' , 'M12 4.5v15m7.5-7.5h-15');
      this.toggleHeight(element,icon);
    }
    // current does'nt exist
    else{
      this.toggleHeight(element, icon);
    }
  }

  toggleHeight(element:any, icon:HTMLElement){
    // Ajouter ou supprimer la classe "h-0" et "h-auto"
    if (element?.classList.contains("h-0")) {
        element?.classList.remove("h-0");
        element?.classList.add("h-auto");
        this.currentOpenElement = element;
        icon.setAttribute('d' , 'M5 12h14');
        this.previousIcon = icon;
    } else {
        element?.classList.remove("h-auto");
        element?.classList.add("h-0");
        icon.setAttribute('d' , 'M12 4.5v15m7.5-7.5h-15');
        //this.previousIcon = null;
    }
  }
}
 