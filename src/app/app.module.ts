import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    NavBarComponent,
    HomeComponent,
    CategoriesComponent,
    UsersComponent,
    AddQuestionComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
