import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//database
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//router
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Component
import { MainComponent } from './main/main.component';
import { DonationComponent } from './donation/donation.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListDonationComponent } from './list-donation/list-donation.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { LoginComponent } from './login/login.component';
import { LoginFinancialOfficerComponent } from './login-financial-officer/login-financial-officer.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CardComponent } from './card/card.component';
import { DonateComponent } from './donate/donate.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { ProjectComponent } from './project/project.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DonationComponent,
    EditProfileComponent,
    EditProjectComponent,
    ListDonationComponent,
    ListProjectComponent,
    LoginComponent,
    LoginFinancialOfficerComponent,
    ProfileComponent,
    AddProjectComponent,
    CardComponent,
    DonateComponent,
    DonationDetailComponent,
    ProjectComponent,
    NotableAlumniComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent },
      { path: 'add-project', component: AddProjectComponent },
      { path: 'card', component: CardComponent },
      { path: 'donate', component: DonateComponent},
      { path: 'donation-detail', component: DonationDetailComponent },
      { path: 'donation', component: DonationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'edit-project', component: EditProjectComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'list-project', component: ListProjectComponent },
      { path: 'notable-alumni', component: NotableAlumniComponent }
      /*,
      { path: 'scedule', component: SceduleComponent },
      { path: 'data_scedule', component: DataSceduleComponent },
      { path: 'data_genshin', component: DataGenshinComponent },
      { path: 'genshin_base_elemental', component: DataBaseElementalComponent },
      { path: 'test_project', component: TestNewProjectComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
