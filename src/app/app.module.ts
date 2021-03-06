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
import { ChartsModule } from 'ng2-charts';
import { ForgotPasswordModalComponent} from './components/forgot-password-modal/forgot-password-modal.component';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { ExportAsXLSXService } from './services/export-as-xlsx.service';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ChartsComponent } from './components/charts/charts.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MessageComponent } from './components/client/message/message.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartModule } from 'angular-highcharts';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AdminComponent } from './components/admin/admin.component';
import {DataTableModule} from "angular-6-datatable";
import { FacebookModule } from 'ngx-facebook';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { SubmessageComponent } from './components/client/message/submessage/submessage.component';
const appRoutes: Routes = [
  { path: 'cabinet', component: ClientComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'change-password',  component: ChangePasswordComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profiles-admin/:id', component: AdminMessagesComponent},
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoginComponent,
    ChartsComponent,
    MessageComponent,
    ForgotPasswordModalComponent,
    ProfileComponent,
    ChangePasswordComponent,
    AdminComponent,
    AdminMessagesComponent,
    SubmessageComponent,
  ],
  entryComponents: [ForgotPasswordModalComponent],
  imports: [
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AlertModule.forRoot(),
    FacebookModule.forRoot(),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    HttpModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ChartModule,
    MatTooltipModule,
    DataTableModule,
    
    ChartsModule
  ],
  providers: [
    HttpService,
    AuthService,
    UserService,
    ExportAsXLSXService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
