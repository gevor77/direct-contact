import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { AlertModule } from 'ngx-bootstrap';
import { FlexLayoutModule} from '@angular/flex-layout';

import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: '',      component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoginComponent
  ],
  imports: [
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AlertModule.forRoot(),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HttpService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
