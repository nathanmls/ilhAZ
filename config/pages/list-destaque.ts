import { Component } from '@angular/core';
import { ListPage } from '../../src/pages/list/list';

@Component({
    selector: 'page-destaque-list',
    templateUrl: '../../src/pages/list/list.html'
})
export class ListDestaquePage extends ListPage {
    type: string = 'destaque';
}
