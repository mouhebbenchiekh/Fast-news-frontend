import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import * as es6printJS from "print-js";


@Injectable()
export class NewsService {
  constructor(private http: HttpClient) { }

  async getPdfUrl(topic:string): Promise<string> {                                                                                      

    let pdfUrl = '';
                                                                                          



    let response = await firstValueFrom(this.http.get(`http://localhost:3000/news/${topic}`, { responseType: 'blob' }))

    const pdfBlob = new Blob([response], { type: "application/pdf" });
    const url: string = URL.createObjectURL(pdfBlob);
                                                                                      
    return url

  }

  printPdf(url: string) {

    es6printJS(url);

  }                                  
}