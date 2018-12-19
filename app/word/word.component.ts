import { Component, OnInit } from "@angular/core";
import { Word } from '../word';
import { ActivatedRoute, Router } from '@angular/router';
import { WordService } from '../word.service';
import { Page } from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: "Word",
	moduleId: module.id,
	templateUrl: "./word.component.html",
	styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

	id: string;

	word: Word;

	constructor(private route: ActivatedRoute, private wordService: WordService, private page: Page, private routerExtensions: RouterExtensions) {
		page.actionBarHidden = false;
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params.id;
		this.wordService.getWordById(this.id)
			.subscribe(data => this.word = data);
	}

	onNavBtnTap() {
		this.routerExtensions.back();
	}
}

