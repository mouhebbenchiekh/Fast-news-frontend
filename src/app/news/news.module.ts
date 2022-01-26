import { NgModule } from "@angular/core";
import { NewsComponent } from "./news.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
    providers:[
        { provide: Window, useValue: window },
        
    ],
    declarations: [
        NewsComponent
    ],
    imports: [

        PdfViewerModule
    ],
    bootstrap:[NewsComponent]
})
export class NewsModule { }
