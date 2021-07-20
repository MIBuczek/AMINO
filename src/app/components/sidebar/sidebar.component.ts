import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { sideContent } from './side-lang-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges, OnDestroy {
  @Input() currentPost: any;
  @Input() activeTags: BehaviorSubject<string[]> | undefined;

  public sideContent = sideContent;

  constructor(public langSwitcher: LangSwitcherService) {}

  public markTagToggle(index: number): void {
    if (this.currentPost) {
      return;
    }
    const tags = sideContent[this.langSwitcher.getCurrentLang].tags;
    const currentTag = tags[index];
    currentTag.active = !currentTag.active;
    const currentActiveTags: string[] = tags.reduce((acc: string[], tag) => {
      if (tag.active) {
        acc.push(tag.title);
      }
      return acc;
    }, []);
    this.activeTags?.next(currentActiveTags);
  }

  private selectPostTag(postTags: string[]): void {
    const tags = sideContent[this.langSwitcher.getCurrentLang].tags;
    tags.forEach((tag) => {
      if (postTags.includes(tag.title)) {
        tag.active = true;
      } else {
        tag.active = false;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.currentPost?.currentValue) {
      this.selectPostTag(this.currentPost.tags);
    }
  }

  ngOnDestroy(): void {
    sideContent[this.langSwitcher.getCurrentLang].tags.forEach(
      (tag) => (tag.active = false)
    );
  }
}
