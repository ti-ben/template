import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] =
    [
      {
        title: 'Dashboard',
        icon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {title: 'Charts', url: 'page1', icon: 'fas fa-chart-pie mr-1'},
          {title: 'SUBGR1-2', url: 'page2', icon: 'left fas fa-angle-right'}
        ]
      },
      {
        title: 'Fleet',
        icon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {title: 'Camions', url: 'page3', icon: 'left fas fa-angle-right'},
          {title: 'SUBGR2-2', url: 'page4', icon: 'left fas fa-angle-right'}
        ]
      },
      {
        title: 'Employee',
        icon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {title: 'Chauffeurs', url: 'page5', icon: 'left fas fa-angle-right'},
          {title: 'SUBGR3-2', url: 'page6', icon: 'left fas fa-angle-right'}
        ]
      },
      {
        title: 'Settings',
        icon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {title: 'SUBGR4-1', url: 'page7', icon: 'left fas fa-angle-right'},
          {title: 'SUBGR4-2', url: 'page8', icon: 'left fas fa-angle-right'},
          {title: 'SUBGR4-3', url: 'page9', icon: 'left fas fa-angle-right'},
          {title: 'Credential', url: 'credential', icon: 'left fas fa-angle-right'},
        ]
      },
      {
        title: 'Help',
        icon: 'nav-icon fas fa-tachometer-alt',
        submenu: [
          {title: 'FAQ', url: 'page7', icon: 'left fas fa-angle-right'},
          {title: 'Support', url: 'page8', icon: 'left fas fa-angle-right'},
          {title: 'Contact', url: 'page9', icon: 'left fas fa-angle-right'}
        ]
      }
    ];
}
