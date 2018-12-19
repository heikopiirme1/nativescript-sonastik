"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var word_service_1 = require("../word.service");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var WordComponent = /** @class */ (function () {
    function WordComponent(route, wordService, page, routerExtensions) {
        this.route = route;
        this.wordService = wordService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        page.actionBarHidden = false;
    }
    WordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.wordService.getWordById(this.id)
            .subscribe(function (data) { return _this.word = data; });
    };
    WordComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: "Word",
            moduleId: module.id,
            templateUrl: "./word.component.html",
            styleUrls: ['./word.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, word_service_1.WordService, page_1.Page, router_2.RouterExtensions])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBeUQ7QUFDekQsZ0RBQThDO0FBQzlDLGdDQUErQjtBQUMvQixzREFBK0Q7QUFRL0Q7SUFNQyx1QkFBb0IsS0FBcUIsRUFBVSxXQUF3QixFQUFVLElBQVUsRUFBVSxnQkFBa0M7UUFBdkgsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFsQlcsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbkMsQ0FBQzt5Q0FPMEIsdUJBQWMsRUFBdUIsMEJBQVcsRUFBZ0IsV0FBSSxFQUE0Qix5QkFBZ0I7T0FOL0gsYUFBYSxDQW1CekI7SUFBRCxvQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4uL3dvcmQnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBXb3JkU2VydmljZSB9IGZyb20gJy4uL3dvcmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiV29yZFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3dvcmQuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vd29yZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aWQ6IHN0cmluZztcblxuXHR3b3JkOiBXb3JkO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHdvcmRTZXJ2aWNlOiBXb3JkU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xuXHRcdHRoaXMud29yZFNlcnZpY2UuZ2V0V29yZEJ5SWQodGhpcy5pZClcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLndvcmQgPSBkYXRhKTtcblx0fVxuXG5cdG9uTmF2QnRuVGFwKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cbn1cblxuIl19