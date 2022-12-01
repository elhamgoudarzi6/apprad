import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  providers: [MessageService]
})
export class FaqComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }



}
