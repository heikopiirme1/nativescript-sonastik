import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    searchEst = true;
    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text.toLowerCase());
        if (this.searchEst == true) {
            this.router.navigate(['est/' + searchBar.text.toLowerCase()]);
        } else {
            this.router.navigate(['eng/' + searchBar.text.toLowerCase()]);
        }

    }

    changeSearch(): void {
        this.searchEst = !this.searchEst;
        console.log(this.searchEst);
        if (this.searchEst == true) {

        }
    }


    constructor(private page: Page, private router: Router, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = false;
    }
    onNavInfoTap() {
        this.routerExtensions.navigate(["/info"]);
    }

    ngOnInit(): void {
    }
}
