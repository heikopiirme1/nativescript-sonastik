"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var est_list_component_1 = require("./est-list/est-list.component");
var eng_list_component_1 = require("./englist/eng-list.component");
var word_component_1 = require("./word/word.component");
var info_component_1 = require("./info/info.component");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "est/:search", component: est_list_component_1.EstListComponent },
    { path: "eng/:search", component: eng_list_component_1.EngListComponent },
    { path: "word/:id", component: word_component_1.WordComponent },
    { path: "info", component: info_component_1.InfoComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxvRUFBaUU7QUFDakUsbUVBQWdFO0FBQ2hFLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFFdEQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzdDLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBFc3RMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZXN0LWxpc3QvZXN0LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbmdMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZW5nbGlzdC9lbmctbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmRDb21wb25lbnQgfSBmcm9tIFwiLi93b3JkL3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5mby9pbmZvLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImVzdC86c2VhcmNoXCIsIGNvbXBvbmVudDogRXN0TGlzdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJlbmcvOnNlYXJjaFwiLCBjb21wb25lbnQ6IEVuZ0xpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwid29yZC86aWRcIiwgY29tcG9uZW50OiBXb3JkQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImluZm9cIiwgY29tcG9uZW50OiBJbmZvQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=