import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { ITag, sideContent } from './side-lang-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() activeTags: BehaviorSubject<string[]> | undefined;
  public sideContent = sideContent;

  constructor(public langSwitcher: LangSwitcherService) {}

  public markTagToggle(index: number): void {
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
}
