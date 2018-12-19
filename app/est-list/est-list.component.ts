import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "EstList",
    moduleId: module.id,
    templateUrl: "./est-list.component.html",
    styleUrls: ['./est-list.component.css']
})
export class EstListComponent implements OnInit {
    searchPhrase: string;


    countries = [];

    onItemTap(id): void {
        console.log('Item with id: ' + id + ' tapped');
        this.router.navigate(['word/' + id]);
    }

    public words = [];

    search: string;

    constructor(private wordService: WordService, private route: ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions) {
    }

    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        this.wordService.getWordsByEst(searchBar.text.toLowerCase())
            .subscribe(data => this.countries = data);
        this.search = searchBar.text.toLowerCase();
    }

    ngOnInit(): void {
        this.search = this.route.snapshot.params.search;
        this.wordService.getWordsByEst(this.search)
            .subscribe(data => this.countries = data);
    }


    onNavBtnTap() {
        this.routerExtensions.back();
    }
}