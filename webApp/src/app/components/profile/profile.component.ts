import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.get().subscribe((profile) => {
      this.profile = profile;
    });
  }
}
