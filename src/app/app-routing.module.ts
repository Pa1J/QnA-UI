import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"forum/home/add", component: AddQuestionComponent},
  {path:"forum/home/:questionId", component: HomeComponent },
  {path:"forum/home", component:HomeComponent},
  {path:"forum/categories/add", component:AddCategoryComponent},
  {path:"forum/categories", component: CategoriesComponent},
  {path:"forum/users/:userId/:questionId", component:UsersComponent},
  {path:"forum/users/:userId", component: UsersComponent},
  {path:"forum/users", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
