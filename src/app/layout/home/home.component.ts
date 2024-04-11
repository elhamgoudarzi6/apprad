import {  Component } from '@angular/core';
import { HeroComponent } from "./slider/slider.component";
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ServiceComponent } from './service/service.component';
import { FaqComponent } from './faq/faq.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent,FaqComponent, HeroComponent,ServiceComponent]
})
export class HomeComponent {

}
