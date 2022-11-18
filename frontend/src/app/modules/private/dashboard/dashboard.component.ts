import { Component, OnInit } from '@angular/core';
import {Credential, CredentialDto} from "@security/model";
import {AuthService} from "@security/service/auth.service";
import {ApiResponse} from "@shared/model";
import {CredentialHelper} from "@security/helper";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  credential?: Credential;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
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
