import { NgIfContext } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() src: string = '';
  @Input() icone: string = '';
  @Input() button: string = '';
  constructor() {}

  ngOnInit(): void {}
}
