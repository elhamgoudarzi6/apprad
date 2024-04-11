import { Component, OnInit } from '@angular/core';
import { PrimengListModule } from '../../../primeng-list.module';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PrimengListModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

