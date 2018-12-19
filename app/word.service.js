"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var WordService = /** @class */ (function () {
    function WordService(http) {
        this.http = http;
        this.apiUrl = "http://aits.tonismals.ee:3000/";
    }
    WordService.prototype.getWordsByEst = function (search) {
        console.log(this.apiUrl + "est/" + search);
        return this.http.get(this.apiUrl + "est/" + search);
    };
    WordService.prototype.getWordsByEng = function (search) {
        console.log(this.apiUrl + "eng/" + search);
        return this.http.get(this.apiUrl + "eng/" + search);
    };
    WordService.prototype.getWordById = function (id) {
        console.log(this.apiUrl + "word/" + id);
        return this.http.get(this.apiUrl + "word/" + id);
    };
    WordService.prototype.getWordCount = function (count) {
        console.log(this.apiUrl + "wordcount/");
        return this.http.get(this.apiUrl + "wordcount/");
    };
    WordService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU8vRDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLFdBQU0sR0FBVyxnQ0FBZ0MsQ0FBQztJQUVsQixDQUFDO0lBRXpDLG1DQUFhLEdBQWIsVUFBYyxNQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Qsa0NBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUF2QlEsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0FLNEIsaUJBQVU7T0FKM0IsV0FBVyxDQXlCdkI7SUFBRCxrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vd29yZCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV29yZFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYXBpVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9haXRzLnRvbmlzbWFscy5lZTozMDAwL1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgZ2V0V29yZHNCeUVzdChzZWFyY2gpOiBPYnNlcnZhYmxlPFdvcmRbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBpVXJsICsgXCJlc3QvXCIgKyBzZWFyY2gpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdvcmRbXT4odGhpcy5hcGlVcmwgKyBcImVzdC9cIiArIHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29yZHNCeUVuZyhzZWFyY2gpOiBPYnNlcnZhYmxlPFdvcmRbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBpVXJsICsgXCJlbmcvXCIgKyBzZWFyY2gpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdvcmRbXT4odGhpcy5hcGlVcmwgKyBcImVuZy9cIiArIHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29yZEJ5SWQoaWQpOiBPYnNlcnZhYmxlPFdvcmQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwaVVybCArIFwid29yZC9cIiArIGlkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxXb3JkPih0aGlzLmFwaVVybCArIFwid29yZC9cIiArIGlkKTtcclxuICAgIH1cclxuICAgIGdldFdvcmRDb3VudChjb3VudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBpVXJsICsgXCJ3b3JkY291bnQvXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgXCJ3b3JkY291bnQvXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==