import { Component, OnInit } from '@angular/core';
import { PrimengListModule } from '../../../primeng-list.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PrimengListModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
