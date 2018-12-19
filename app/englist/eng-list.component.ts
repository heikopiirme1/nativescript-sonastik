import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: "EngList",
	moduleId: module.id,
	templateUrl: "./eng-list.component.html",
	styleUrls: ['./eng-list.component.css']
})
export class EngListComponent implements OnInit {
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
		this.wordService.getWordsByEng(searchBar.text.toLowerCase())
			.subscribe(data => this.countries = data);
		this.search = searchBar.text.toLowerCase();
	}

	ngOnInit(): void {
		this.search = this.route.snapshot.params.search;
		this.wordService.getWordsByEng(this.search)
			.subscribe(data => this.countries = data);
	}

	onNavBtnTap() {
		this.routerExtensions.back();
	}

}