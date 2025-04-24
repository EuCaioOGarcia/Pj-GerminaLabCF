import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarUserComponent } from './components/cadastrar-user/cadastrar-user.component';
import { GerenciamentoNotasComponent } from './components/gerenciamento-notas/gerenciamento-notas.component';
import { CadastrarAlunoComponent } from './components/cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarNotaComponent } from './components/cadastrar-nota/cadastrar-nota.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "grafico",
        component: GraficoComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastroUser",
        component: CadastrarUserComponent
    },
    {
        path: "gerenciamento",
        component: GerenciamentoNotasComponent
    },
    {
        path: "cadastroAluno",
        component: CadastrarAlunoComponent
    },
    {
        path: "cadastroNota",
        component: CadastrarNotaComponent
    },


];
