import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryPopComponent } from './add-category-pop/add-category-pop.component';
import { AddQuestionPopComponent } from './add-question-pop/add-question-pop.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "forum/home/add", component: AddQuestionPopComponent},
  { path: "forum/home/:question_id", component: HomeComponent},
  { path: "forum/home", component: HomeComponent},
  { path: "forum/categories/add", component: AddCategoryPopComponent},
  { path: "forum/categories", component: CategoriesComponent},
  { path: "forum/users/:user_id/:question_id", component: UsersComponent},
  { path: "forum/users/:user_id", component: UsersComponent},
  { path: "forum/users", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
