import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material_handbook';
  name = 'Angular';

  onButtonClicked(event: any) {
   console.log(event); // handle button clicked here.
  }

}
