import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(public authService: AuthService) {
    this.authService.getUserProfile().subscribe((res) => {
      this.currentUser = res;
    });
  }

  ngOnInit() {}
}
