import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Word } from '../word';
import { ActivatedRoute, Router } from '@angular/router';
import { WordService } from '../word.service';
import { Page } from "ui/page";

@Component({
	selector: "Info",
	moduleId: module.id,
	templateUrl: "./info.component.html",
	styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

	constructor(private route: ActivatedRoute, private wordService: WordService, private page: Page, private routerExtensions: RouterExtensions) {
	}
	public count;

	ngOnInit(): void {
		this.wordService.getWordCount(this.count)
			.subscribe(data => this.count = data);
	}
	onNavBtnTap() {
		this.routerExtensions.back();
	}
}