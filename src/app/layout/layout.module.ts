import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './home/team/team.component';
import { PortfolioComponent } from './home/Portfolio/Portfolio.component';
import { ContactComponent } from './home/contact/contact.component';
import { FeaturesComponent } from './home/features/features.component';
import { FaqComponent } from './home/faq/faq.component';
import { HeroComponent} from './home/hero/hero.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmodulesModule } from '../SharedModules/sharedmodules.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SharedComponentsModule } from '../SharedComponents/sharedcomponents.module';
import { HomeComponent } from './home/home.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import {CarouselModule} from "ngx-owl-carousel-o";
import {GalleriaModule} from "primeng/galleria";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  declarations: [
    FaqComponent,
    FeaturesComponent,
    ContactComponent,
    PortfolioComponent,
    TeamComponent,
    HeroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    SharedmodulesModule,
    SharedComponentsModule,
    SharedModule,
    NgImageFullscreenViewModule,
    NgxImageZoomModule,
    JwPaginationModule,
    CarouselModule,
    GalleriaModule,
    TabViewModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
