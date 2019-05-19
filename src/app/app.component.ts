import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog';

  posts = [
  	{
  		title : 'Mon titre 1',
  		content : 'rez zhfsh skjhgskhg shg lkshgerg',
  		like: 2,
  		created_at : new Date()
  	},
  	{
  		title : 'Mon titre 2',
  		content : 'rez zhfsh skjhgskhg shg lkshgerg',
  		like: 0,
  		created_at : new Date()
  	},
  	{
  		title : 'Mon titre 3',
  		content : 'rez zhfsh skjhgskhg shg lkshgerg',
  		like: -5,
  		created_at : new Date()
  	}
  ];
}
