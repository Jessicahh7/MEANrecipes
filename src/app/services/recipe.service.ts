import Recipe from '../models/recipe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {

  api_url = 'http://localhost:3000';
  recipeUrl = `${this.api_url}/api/tictactoes`;

  constructor(
    private http: HttpClient
  ) { }

  createRecipe(recipe: Recipe): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.recipeUrl}`, recipe);
  }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get(this.recipeUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Recipe[];
    }))
  }

  editRecipe(recipe:Recipe){
    let editUrl = `${this.recipeUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, recipe);
  }

  deleteRecipe(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.recipeUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}