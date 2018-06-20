import { Component } from '@angular/core';
import { ItemPage } from '../../src/pages/item/item';

@Component({
    selector: 'page-destaque-item',
    templateUrl: '../../src/pages/item/item.html'
})
export class ItemDestaquePage extends ItemPage {
    type: string = 'destaque';
}