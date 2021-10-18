import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationMenuComponent } from './left-navigation-menu/left-navigation-menu.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { UserTrayComponent } from './user-tray/user-tray.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { AddQuestionPopComponent } from './add-question-pop/add-question-pop.component';
import { AddCategoryPopComponent } from './add-category-pop/add-category-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationMenuComponent,
    TopNavigationBarComponent,
    UserTrayComponent,
    HomeComponent,
    CategoriesComponent,
    UsersComponent,
    AddQuestionPopComponent,
    AddCategoryPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
