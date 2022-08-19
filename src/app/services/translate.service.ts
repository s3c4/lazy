import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    public static languages: string[] = ['en', 'ro'];

    public activeLanguage = new BehaviorSubject<string>('');

    constructor() {
        this.activeLanguage.next('en');
    }
}