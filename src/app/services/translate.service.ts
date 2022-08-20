import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    public static languages: string[] = ['en', 'ro'];
    public activeLanguage = new BehaviorSubject<string>('');

    constructor() {
        this.activeLanguage.next(sessionStorage.getItem('language') || 'en');
    }
}