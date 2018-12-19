"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var word_service_1 = require("../word.service");
var router_2 = require("@angular/router");
var router_3 = require("nativescript-angular/router");
var EngListComponent = /** @class */ (function () {
    function EngListComponent(wordService, route, router, routerExtensions) {
        this.wordService = wordService;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.countries = [];
        this.words = [];
    }
    EngListComponent.prototype.onItemTap = function (id) {
        console.log('Item with id: ' + id + ' tapped');
        this.router.navigate(['word/' + id]);
    };
    EngListComponent.prototype.onSearchSubmit = function (args) {
        var _this = this;
        var searchBar = args.object;
        this.wordService.getWordsByEng(searchBar.text.toLowerCase())
            .subscribe(function (data) { return _this.countries = data; });
        this.search = searchBar.text.toLowerCase();
    };
    EngListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search = this.route.snapshot.params.search;
        this.wordService.getWordsByEng(this.search)
            .subscribe(function (data) { return _this.countries = data; });
    };
    EngListComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    EngListComponent = __decorate([
        core_1.Component({
            selector: "EngList",
            moduleId: module.id,
            templateUrl: "./eng-list.component.html",
            styleUrls: ['./eng-list.component.css']
        }),
        __metadata("design:paramtypes", [word_service_1.WordService, router_1.ActivatedRoute, router_2.Router, router_3.RouterExtensions])
    ], EngListComponent);
    return EngListComponent;
}());
exports.EngListComponent = EngListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxnREFBOEM7QUFDOUMsMENBQXlDO0FBQ3pDLHNEQUErRDtBQVEvRDtJQWNDLDBCQUFvQixXQUF3QixFQUFVLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQztRQUEzSCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWL0ksY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1SLFVBQUssR0FBRyxFQUFFLENBQUM7SUFLbEIsQ0FBQztJQVRELG9DQUFTLEdBQVQsVUFBVSxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBUUQseUNBQWMsR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBS0M7UUFKQSxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDMUQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQWhDVyxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBZWdDLDBCQUFXLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCO09BZG5JLGdCQUFnQixDQWtDNUI7SUFBRCx1QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV29yZFNlcnZpY2UgfSBmcm9tICcuLi93b3JkLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJFbmdMaXN0XCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vZW5nLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZW5nLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVuZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXG5cdGNvdW50cmllcyA9IFtdO1xuXG5cdG9uSXRlbVRhcChpZCk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdJdGVtIHdpdGggaWQ6ICcgKyBpZCArICcgdGFwcGVkJyk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3b3JkLycgKyBpZF0pO1xuXHR9XG5cdHB1YmxpYyB3b3JkcyA9IFtdO1xuXG5cdHNlYXJjaDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cdH1cblxuXHRvblNlYXJjaFN1Ym1pdChhcmdzKTogdm9pZCB7XG5cdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG5cdFx0dGhpcy53b3JkU2VydmljZS5nZXRXb3Jkc0J5RW5nKHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCkpXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5jb3VudHJpZXMgPSBkYXRhKTtcblx0XHR0aGlzLnNlYXJjaCA9IHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnNlYXJjaDtcblx0XHR0aGlzLndvcmRTZXJ2aWNlLmdldFdvcmRzQnlFbmcodGhpcy5zZWFyY2gpXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5jb3VudHJpZXMgPSBkYXRhKTtcblx0fVxuXG5cdG9uTmF2QnRuVGFwKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cblxufSJdfQ==