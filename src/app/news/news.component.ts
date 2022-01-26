import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from './news.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',

  providers: [NewsService],
})
export class NewsComponent implements OnInit {
  pdfSrc = '';
  topic = '';

  constructor(
    private newsService: NewsService,
    private window: Window,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.topic = params['topic'];
      this.getPdf()
    });
  }

  async getPdf() {
    let url = await this.newsService.getPdfUrl(this.topic);
    this.pdfSrc = url;
  }

  printPdf() {
    this.newsService.printPdf(this.pdfSrc);
  }
}
