// import { Response } from './@angular/http';
import { RecipeService } from './services/recipe.service';
import Recipe from './models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-angular';

  ngOnInit() {
  }
}

