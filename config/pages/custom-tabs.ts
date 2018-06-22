import { Component } from '@angular/core';

import { TabsPage } from '../../src/pages/tabs/tabs';
import { IMenuItem } from '../../src/components/menu-items/menu-items';

@Component({
    selector: 'page-custom-tabs',
    templateUrl: '../../src/pages/tabs/tabs.html'
})


export class CustomTabsPage extends TabsPage {
    list: Array<IMenuItem> = [
       {
        type: 'internal',
        trans: 'Home',
        page: 'posts',
        icon: 'home',
    }, {
        type: 'internal',
        trans: 'Destaques',
        page: 'category',
        params: {
            id: '32'
        },
        icon: 'star',
    }, {
        type: 'internal',
        trans: 'CATEGORIES',
        page: 'categories',
        icon: 'apps',
    }]
}