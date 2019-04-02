import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor() {
    }

    getItems() {
        return [
            {item: 'シャンパン', itemId: 1},
            {item: 'ウィスキー', itemId: 2},
            {item: '焼酎', itemId: 3},
            {item: 'フード', itemId: 4}
        ]
    }

    getItemGroupOptions(){
        return [
            {
                label: 'シャンパン',
                items: [
                    {label: 'モエシャンドン', value: 1},
                    {label: 'クリュグ', value: 2}
                ]
            },
            {
                label: 'ウィスキー',
                items: [
                    {label: 'マッカラン', value: 3},
                    {label: 'バランタイン', value: 4}
                ]
            },
            {
                label: '焼酎',
                items: [
                    {label: '黒霧島', value: 5}
                ]
            }
        ];
    }
}
