import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './word';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WordService {

    private apiUrl: string = "http://aits.tonismals.ee:3000/";

    constructor(private http: HttpClient) { }

    getWordsByEst(search): Observable<Word[]> {
        console.log(this.apiUrl + "est/" + search);
        return this.http.get<Word[]>(this.apiUrl + "est/" + search);
    }

    getWordsByEng(search): Observable<Word[]> {
        console.log(this.apiUrl + "eng/" + search);
        return this.http.get<Word[]>(this.apiUrl + "eng/" + search);
    }

    getWordById(id): Observable<Word> {
        console.log(this.apiUrl + "word/" + id);
        return this.http.get<Word>(this.apiUrl + "word/" + id);
    }
    getWordCount(count) {
        console.log(this.apiUrl + "wordcount/");
        return this.http.get(this.apiUrl + "wordcount/");
    }

}