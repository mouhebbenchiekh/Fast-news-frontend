import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fast-news';

  constructor(private searchService: NbSearchService, public router: Router) {
    this.searchService.onSearchSubmit().subscribe((data: any) => {
      this.getPdf(data.term);
    });
  }

  getPdf(searchKeyWords: string) {
    this.router.navigate(['news',searchKeyWords]);
  }
}
