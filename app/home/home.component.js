"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router, routerExtensions) {
        this.page = page;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.searchEst = true;
        page.actionBarHidden = false;
    }
    HomeComponent.prototype.onSearchSubmit = function (args) {
        var searchBar = args.object;
        console.log("You are searching for " + searchBar.text.toLowerCase());
        if (this.searchEst == true) {
            this.router.navigate(['est/' + searchBar.text.toLowerCase()]);
        }
        else {
            this.router.navigate(['eng/' + searchBar.text.toLowerCase()]);
        }
    };
    HomeComponent.prototype.changeSearch = function () {
        this.searchEst = !this.searchEst;
        console.log(this.searchEst);
        if (this.searchEst == true) {
        }
    };
    HomeComponent.prototype.onNavInfoTap = function () {
        this.routerExtensions.navigate(["/info"]);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_2.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHNEQUErRDtBQVEvRDtJQXVCSSx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxnQkFBa0M7UUFBOUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBdEJsRyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBdUJiLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUF0QkQsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO0lBRUwsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1NBRTNCO0lBQ0wsQ0FBQztJQU1ELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUEvQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0F3QjRCLFdBQUksRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0I7T0F2QnpGLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlYXJjaEVzdCA9IHRydWU7XG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRXN0ID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZXN0LycgKyBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2VuZy8nICsgc2VhcmNoQmFyLnRleHQudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VTZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoRXN0ID0gIXRoaXMuc2VhcmNoRXN0O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaEVzdCk7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEVzdCA9PSB0cnVlKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgb25OYXZJbmZvVGFwKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2luZm9cIl0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==