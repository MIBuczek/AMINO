import { NgIfContext } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() src = '';
  @Input() icone = '';
  @Input() button = '';
  constructor() {}

  ngOnInit(): void {}
}
