import { NgModule } from "@angular/core";
import { NewsComponent } from "./news.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NbCardModule, NbSpinnerModule } from "@nebular/theme";

@NgModule({                                           
    providers:[                                           
        { provide: Window, useValue: window },                                                                                      
                                                   
    ],                                           
    declarations: [                                           
        NewsComponent                                           
    ],                                                                                      
    imports: [                                           
                                           
        PdfViewerModule,
        NbSpinnerModule,
        NbCardModule
    ],
    bootstrap:[NewsComponent]
})
export class NewsModule { }
