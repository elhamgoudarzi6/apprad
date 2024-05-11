import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { PrimengListModule } from '../../../primeng-list.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengListModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | any;
  items1: MenuItem[] | any;

  display = false;
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router) { }

  ngOnInit(): void {
    this.items1 = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: () => this.router.navigate(['/']),
      },
      {
        label: 'محصولات',
        icon: 'pi pi-fw pi-bars',
        items: [
          {
            label: 'وب سایت',
            icon: 'pi pi-fw pi-desktop',
            items: [
              { label: 'سامانه نگاه', url: 'http://negahlstp.ir', icon: 'pi pi-fw pi-link' },
              { label: 'فروشگاه گوشی 24', url: 'https://gosgi24.com', icon: 'pi pi-fw pi-link' },
              { label: 'مرکز وکلا  قضاییه', url: 'https://markazvl.ir', icon: 'pi pi-fw pi-link' },
              { label: 'سامانه رفاه', url: 'https://refahkh.ir', icon: 'pi pi-fw pi-link' },
              { label: 'سامانه رفاه', url: 'https://refahkh.ir', icon: 'pi pi-fw pi-link' },
              { label: 'وقت مشاوره حقوقی', url: 'https://drjaferi.ir', icon: 'pi pi-fw pi-link' },
              { label: 'خرم گستر الکترونیک', url: 'https://khorram-madar.com', icon: 'pi pi-fw pi-link' },
              { label: 'کلینیک دندانپزشکی', url: 'https://drehsangaravand.ir', icon: 'pi pi-fw pi-link' },
              { label: 'جهان طب خرم', url: 'https://jahantebkhoram.ir', icon: 'pi pi-fw pi-link' },
              { label: 'سامانه آزمون', url: 'https://azmoon.ir', icon: 'pi pi-fw pi-link' },

            ]
          },
          {
            label: 'اپلیکیشن',
            icon: 'pi pi-fw pi-mobile',
            items: [
              { label: 'پتوس', url: 'http://apprad.ir', icon: 'pi pi-fw pi-link' },
              { label: 'دکمه', url: 'https://apprad.ir', icon: 'pi pi-fw pi-link' },
              { label: 'چرتکه', url: 'https://apprad.ir', icon: 'pi pi-fw pi-link' },
              { label: 'زیپ زیپ', url: 'https://apprad.ir', icon: 'pi pi-fw pi-link' },
            ]
          },
        ],
      },
      {
        label: 'سوالات متداول',
        icon: 'pi pi-fw pi-question-circle',
        command: () => this.router.navigate(['/faq']),
      },
      {
        label: 'ارتباط با ما',
        icon: 'pi pi-fw pi-info-circle',
        command: () => this.onClick('footer')
      }
    ];

    this.items = [
      {
        label: 'صفحه اصلی',
        // icon: 'pi pi-fw pi-home',
        command: () => this.router.navigate(['/']),
      },
      {
        label: 'محصولات',
        // icon: 'pi pi-fw pi-bars',
        items: [
          [
            {
              label: 'وب سایت',
              items: [
                { label: 'سامانه نگاه', url: 'http://negahlstp.ir' },
                { label: 'فروشگاه گوشی 24', url: 'https://gosgi24.com' },
                { label: 'مرکز وکلا قوه قضاییه', url: 'https://markazvl.ir' },
                { label: 'سامانه رفاه', url: 'https://refahkh.ir' },
                { label: 'وقت مشاوره حقوقی', url: 'https://drjaferi.ir' },
                { label: 'خرم گستر الکترونیک', url: 'https://khorram-madar.com' },
                { label: 'کلینیک دندانپزشکی', url: 'https://drehsangaravand.ir' },
                { label: 'جهان طب خرم', url: 'https://jahantebkhoram.ir' },
                { label: 'سامانه آزمون', url: 'https://azmoon.ir' },

              ]
            },
          ],
          [
            {
              label: 'اپلیکیشن',
              items: [{ label: 'پتوس' }, { label: 'دکمه' }, { label: 'چرتکه' }, { label: 'زیپ زیپ' }]
            }
          ],
        ]
      },
      {
        label: 'سوالات متداول',
        // icon: 'pi pi-fw pi-question-circle',
        command: () => this.onClick('faq')
      },
      {
        label: 'ارتباط با ما',
        // icon: 'pi pi-fw pi-info-circle',
        command: () => this.onClick('footer')
      }
    ];
  }


  showMenu(): void {
    this.display = true;
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    if (this.display === true) {
      this.display = false;
    }
  }

}
