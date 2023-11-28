import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { OneComponent } from './one/one.component';
import { SplashComponent } from './splash/splash.component';
import { TryComponent } from './try/try.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
 { path: '', component: SplashComponent },
 { path: 'try', component: TryComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  {path:'one', component:OneComponent},
  {path:'education', component:TimelineComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
