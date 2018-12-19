"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var word_service_1 = require("../word.service");
var page_1 = require("ui/page");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(route, wordService, page, routerExtensions) {
        this.route = route;
        this.wordService = wordService;
        this.page = page;
        this.routerExtensions = routerExtensions;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getWordCount(this.count)
            .subscribe(function (data) { return _this.count = data; });
    };
    InfoComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: "Info",
            moduleId: module.id,
            templateUrl: "./info.component.html",
            styleUrls: ['./info.component.css']
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, word_service_1.WordService, page_1.Page, router_1.RouterExtensions])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsMENBQXlEO0FBQ3pELGdEQUE4QztBQUM5QyxnQ0FBK0I7QUFRL0I7SUFFQyx1QkFBb0IsS0FBcUIsRUFBVSxXQUF3QixFQUFVLElBQVUsRUFBVSxnQkFBa0M7UUFBdkgsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNJLENBQUM7SUFHRCxnQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQVpXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ25DLENBQUM7eUNBRzBCLHVCQUFjLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUksRUFBNEIseUJBQWdCO09BRi9ILGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi4vd29yZCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdvcmRTZXJ2aWNlIH0gZnJvbSAnLi4vd29yZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiSW5mb1wiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2luZm8uY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vaW5mby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgd29yZFNlcnZpY2U6IFdvcmRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHR9XG5cdHB1YmxpYyBjb3VudDtcblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLndvcmRTZXJ2aWNlLmdldFdvcmRDb3VudCh0aGlzLmNvdW50KVxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHRoaXMuY291bnQgPSBkYXRhKTtcblx0fVxuXHRvbk5hdkJ0blRhcCgpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG59Il19