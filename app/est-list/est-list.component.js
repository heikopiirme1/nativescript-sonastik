"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var word_service_1 = require("../word.service");
var router_2 = require("@angular/router");
var router_3 = require("nativescript-angular/router");
var EstListComponent = /** @class */ (function () {
    function EstListComponent(wordService, route, router, routerExtensions) {
        this.wordService = wordService;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.countries = [];
        this.words = [];
    }
    EstListComponent.prototype.onItemTap = function (id) {
        console.log('Item with id: ' + id + ' tapped');
        this.router.navigate(['word/' + id]);
    };
    EstListComponent.prototype.onSearchSubmit = function (args) {
        var _this = this;
        var searchBar = args.object;
        this.wordService.getWordsByEst(searchBar.text.toLowerCase())
            .subscribe(function (data) { return _this.countries = data; });
        this.search = searchBar.text.toLowerCase();
    };
    EstListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search = this.route.snapshot.params.search;
        this.wordService.getWordsByEst(this.search)
            .subscribe(function (data) { return _this.countries = data; });
    };
    EstListComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    EstListComponent = __decorate([
        core_1.Component({
            selector: "EstList",
            moduleId: module.id,
            templateUrl: "./est-list.component.html",
            styleUrls: ['./est-list.component.css']
        }),
        __metadata("design:paramtypes", [word_service_1.WordService, router_1.ActivatedRoute, router_2.Router, router_3.RouterExtensions])
    ], EstListComponent);
    return EstListComponent;
}());
exports.EstListComponent = EstListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxnREFBOEM7QUFDOUMsMENBQXlDO0FBQ3pDLHNEQUErRDtBQVEvRDtJQWVJLDBCQUFvQixXQUF3QixFQUFVLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQztRQUEzSCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYL0ksY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU9SLFVBQUssR0FBRyxFQUFFLENBQUM7SUFLbEIsQ0FBQztJQVZELG9DQUFTLEdBQVQsVUFBVSxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBU0QseUNBQWMsR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBS0M7UUFKRyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQWxDUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBZ0JtQywwQkFBVyxFQUFpQix1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQjtPQWZ0SSxnQkFBZ0IsQ0FtQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi4vd29yZC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJFc3RMaXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2VzdC1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXN0LWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVzdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cbiAgICBjb3VudHJpZXMgPSBbXTtcblxuICAgIG9uSXRlbVRhcChpZCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnSXRlbSB3aXRoIGlkOiAnICsgaWQgKyAnIHRhcHBlZCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvcmQvJyArIGlkXSk7XG4gICAgfVxuXG4gICAgcHVibGljIHdvcmRzID0gW107XG5cbiAgICBzZWFyY2g6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy53b3JkU2VydmljZS5nZXRXb3Jkc0J5RXN0KHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5jb3VudHJpZXMgPSBkYXRhKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnNlYXJjaDtcbiAgICAgICAgdGhpcy53b3JkU2VydmljZS5nZXRXb3Jkc0J5RXN0KHRoaXMuc2VhcmNoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuY291bnRyaWVzID0gZGF0YSk7XG4gICAgfVxuXG5cbiAgICBvbk5hdkJ0blRhcCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59Il19