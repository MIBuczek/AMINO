import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { blogContent } from './blog-lang-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  public blogContent = blogContent;
  constructor(public langSwitcher: LangSwitcherService) {}
}
