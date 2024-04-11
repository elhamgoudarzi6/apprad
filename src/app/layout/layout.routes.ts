import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent },
  ],
}];







