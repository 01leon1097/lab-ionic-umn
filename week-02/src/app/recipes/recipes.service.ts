import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[]=[
    {
      id: 'r1',
      title:"Gado-gado1",
      imageUrl:"https://www.sarihusada.co.id/Nutrisi-Untuk-Bangsa/assets/uploads/2015/09/3e9fd56276d0fba3f723bcf15ae85c7f.jpg",
      ingredients:['Lontong','Sawi','Bumbu Kecap']
    },
    {
      id: 'r2',
      title:"Gado-gado2",
      imageUrl:"https://img.jakpost.net/c/2017/01/31/2017_01_31_20436_1485827331._large.jpg",
      ingredients:['Lontong','Sawi','Bumbu Kecap']
    },
    {
      id: 'r3',
      title:"Gado-gado3",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png",
      ingredients:['Lontong','Sawi','Bumbu Kecap']
    },
    
  ]
  constructor() { }
  
  getAllRecipes(){
    // console.log(this.recipes);
    return [...this.recipes];
  }
  // getRecipe(recipeId: string){
  //   console.log(recipeId);
  // }
  // deleteRecipe(recipeId){
  //   let i;
  //   for(i = 0; i < this.recipes.length; i++) {

  //     if(this.recipes[i].id == recipeId.id){
  //       this.recipes.splice(i, 1);
  //     }
  //     console.log(this.recipes);
  //   }
  //   this.getAllRecipes();
  // }
}
