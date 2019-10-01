import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { CreatUserComponent } from './creat/creatUser/creatUser.component';
import { HeaderComponent } from './header/header.component';
import { UserServiceService } from './services/User/UserService.service';
import { LoginService} from './services/login/Login.service';
import { ListService} from './services/Lists/List.service';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { WelcomePageComponent } from './pages/welcomePage/welcomePage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreatListsComponent } from './creat/creatLists/creatLists.component';
import { ListsComponent } from './pages/listPage/lists.component';
import { ListUpdateComponent } from './update/listUpdate/listUpdate.component';
import { CreatTodosComponent } from './creat/creatTodos/creatTodos.component';
import { TodosPageComponent } from './pages/todosPage/todosPage.component';
import { TodosService } from './services/Todos/Todos.service';
import { LookService } from './services/looks/Look.service';
import { CompletedListPageComponent } from './pages/completedListPage/completedListPage.component';
import { UnCompletedListPageComponent } from './pages/unCompletedListPage/unCompletedListPage.component';

@NgModule({
   declarations: [
      AppComponent,
      CreatUserComponent,
      CreatListsComponent,
      CreatTodosComponent,
      HeaderComponent,
      CompletedListPageComponent,
      UnCompletedListPageComponent,
      WelcomePageComponent,
      ListsComponent,
      TodosPageComponent,
      ListUpdateComponent,
      ProfileComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
      
      {
         path: 'login',
         component: LoginComponent,
      },
       
      {
         path: 'creatUser',
         component: CreatUserComponent,
      },
      {
         path: 'welcome',
         component: WelcomePageComponent,
      },
      
      {
         path: 'profile',
         component: ProfileComponent,
      },
      
      {
         path: 'listCreat',
         component: CreatListsComponent,
      },
      {
         path: 'lists',
         component: ListsComponent ,
      },
      {
         path: 'newListUpdate',
         component: ListUpdateComponent ,
      },
      {
         path: 'todos',
         component: TodosPageComponent ,
      },
      {
         path: 'creatTodos',
         component: CreatTodosComponent ,
      },
      {
         path: 'completed',
         component: CompletedListPageComponent ,
      },
      {
         path: 'uncompleted',
         component: UnCompletedListPageComponent ,
      },


      ])
   ],
   providers: [
      LoginService,
      UserServiceService,
      TodosService,
      LookService,
      ListService
      
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
