import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { blogContent, IBlog } from './blog-lang-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  public blogContent = blogContent;
  public activeTags = new BehaviorSubject<string[]>([]);
  constructor(public langSwitcher: LangSwitcherService) {}

  printPostPerActiveTags(
    blog: { [x: string]: IBlog[] },
    lang: string
  ): IBlog[] {
    return blog[lang].reduce((acc: IBlog[], post: IBlog) => {
      if (!this.activeTags.getValue().length) {
        acc = blog[lang];
      } else {
        this.activeTags.getValue().forEach((active) => {
          if (post.tags.includes(active) && acc.indexOf(post) === -1) {
            acc = [...acc, { ...post }];
          }
        });
      }
      return acc;
    }, []);
  }
}
