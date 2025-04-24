import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarAlunoComponent } from './components/cadastrar-aluno/cadastrar-aluno.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "",
        component: CadastrarAlunoComponent
    }

];
