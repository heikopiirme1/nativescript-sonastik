import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EstListComponent } from "./est-list/est-list.component";
import { EngListComponent } from "./englist/eng-list.component";
import { WordComponent } from "./word/word.component";
import { InfoComponent } from "./info/info.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EstListComponent,
        EngListComponent,
        WordComponent,
        InfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
