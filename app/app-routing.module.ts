import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EstListComponent } from "./est-list/est-list.component";
import { EngListComponent } from "./englist/eng-list.component";
import { WordComponent } from "./word/word.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "est/:search", component: EstListComponent },
    { path: "eng/:search", component: EngListComponent },
    { path: "word/:id", component: WordComponent },
    { path: "info", component: InfoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
