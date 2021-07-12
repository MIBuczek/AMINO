import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { IPost, postsContent } from './post-lang-data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public postsContent = postsContent;
  public currentPost: any;

  constructor(
    public langSwitcher: LangSwitcherService,
    private route: ActivatedRoute
  ) {
    this.langSwitcher.currentLang.subscribe((lang) => {
      route.paramMap.subscribe((resp) => {
        const id = parseInt(resp?.get('id') ?? '', 10);
        id && this.getCurrentPost(id, lang);
      });
    });
  }

  getCurrentPost(id: number, lang: string): void {
    const [post] = this.postsContent[lang].filter(
      (postItem: IPost) => postItem.id === id
    );
    this.currentPost = post;
  }
}
