import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { FinishComponent } from './components/finish/finish.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quizz', component: QuizzComponent },
    { path: 'finish', component: FinishComponent }
];
