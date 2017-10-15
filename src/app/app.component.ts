import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username = "DeepakSharma"

  myFavLang = [
  	{ 'name':'html', 'type':'frontend'},
  	{ 'name':'javascript', 'type':'frontend'},
  	{ 'name':'python', 'type':'backend'},
  	{ 'name':'java', 'type':'backend'},
  ];

}
