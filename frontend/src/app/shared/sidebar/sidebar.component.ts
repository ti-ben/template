import { Component, OnInit } from '@angular/core';
import {AuthService} from "@security/service/auth.service";
import {CredentialHelper} from "@security/helper";
import {ApiResponse} from "@shared/model";
import {Credential, CredentialDto} from "@security/model";
import {SidebarService} from "@shared/service/sidebar.service";


declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  credential?: Credential;
  menuItems: any[];

  constructor(public auth: AuthService, private sideBarService: SidebarService) {
    this.menuItems = this.sideBarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');
    this.me();
  }

  me(): void {
    this.auth.me().subscribe((response: ApiResponse) => {
      this.credential = CredentialHelper.credentialFromDto(response.data as CredentialDto);
      console.log('this.credential', this.credential);
    })
  }

  logout(): void {
    this.auth.logout();
  }
}
