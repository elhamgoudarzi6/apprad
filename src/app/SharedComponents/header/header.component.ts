import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as $ from 'jquery';
import {ViewportScroller} from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  displayMobileMenu = false;
  constructor(private viewportScroller: ViewportScroller) {
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: event => this.onClick('home-sec')
      },
      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.onClick('about-sec')
      },
      {
        label: 'خدمات',
        icon: 'pi pi-fw pi-th-large',
        command: event => this.onClick('services-sec')
      },
      // {
      //   label: 'پروژه ها',
      //   icon: 'pi pi-fw pi-desktop',
      //   command: event => this.onClick('projects-sec')
      // },
      // {
      //   label: 'تیم کاری',
      //   icon: 'pi pi-fw pi-users',
      //   command: event => this.onClick('team-sec')
      // },
      // {
      //   label: 'نمونه کارها',
      //   icon: 'pi pi-fw pi-search',
      //   command: event => this.onClick('work-samples')
      // },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-phone',
        command: event => this.onClick('contact-sec')
      },
      // {
      //   label: 'سفارش پروژه',
      //   icon: 'pi pi-fw pi-check-square',
      //   command: event => this.onClick('')
      // }
    ];
  }

  ngOnInit(): void {
    var pc = window.document.getElementById('pc-fixed')!;
    var pcSticky = 0;
    if (pc !== null) {
      pcSticky = pc.offsetTop;
    }

    window.addEventListener('scroll', scroll, true);

    function scroll() {
      if (pc !== undefined) {
        if (window.pageYOffset > pcSticky) {
          pc.classList.add('sticky');
        } else {
          pc.classList.remove('sticky');
        }
      }
  }
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true){
      this.displayMobileMenu = false;
    }
  }

}
