import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "../services/translate.service";
import { map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

    constructor(private translateService: TranslateService) {
    }

    transform(value: any, metaData: string[]) {
        return this.translateService.activeLanguage.pipe(
            mergeMap((activeLanguage) => {
                const importLanguageData = import('../translate/' + metaData[0] + '/' + activeLanguage + '.json');
                return from(importLanguageData).pipe(
                    map((data) => {
                        value.split('.').forEach((key: string) => {
                            data = data[key];
                        });
                        return data;
                    })
                );
            })
        );
    }
}