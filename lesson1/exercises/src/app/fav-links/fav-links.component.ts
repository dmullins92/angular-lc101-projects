import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle = 'Favorite Websites';
  favLinks = ['https://www.launchcode.org/', 'https://kotaku.com/latest', 'https://thetakeout.com/'];

  constructor() { }

  ngOnInit() {
  }

}
