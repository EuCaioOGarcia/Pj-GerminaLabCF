import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarUserComponent } from './components/cadastrar-user/cadastrar-user.component';
import { GerenciamentoNotasComponent } from './components/gerenciamento-notas/gerenciamento-notas.component';
import { CadastrarAlunoComponent } from './components/cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarNotaComponent } from './components/cadastrar-nota/cadastrar-nota.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CadastroAlComponent } from './components/cadastro-al/cadastro-al.component';

export const routes: Routes = [
    {
        path: "home",
        title: 'Casa Estelar',
        component: HomeComponent
    },
    // colocando o path vazio para redirecionar para o home
    { 
        path: "",   
        redirectTo: '/home', pathMatch: 'full' 
    },
    
    {
        path: "grafico",
        title: 'Gráficos Estelar',
        component: GraficoComponent,
    },

    {
        path: "login",
        title: 'Login Estelar',
        component: LoginComponent,
    },
    {
        path: "cadastroUser",
        title: 'Cadastro de Usuário Estelar',
        component: CadastrarUserComponent
    },

    {
        path: "gerenciamentoNotas",
        title: 'Gerenciamento de Notas Estelar',
        component: GerenciamentoNotasComponent
    },
    {
        path: "cadastroAluno",
        title: 'Cadastro de Aluno Estelar',
        component: CadastroAlComponent,
    },
    // {
    //     path: "cadastroAluno",
    //     title: 'Cadastro de Aluno Estelar',
    //     component: CadastrarAlunoComponent
    // },
    // {
    //     path: "cadastroNota",
    //     title: 'Cadastro de Nota Estelar',
    //     component: CadastrarNotaComponent
    // },
    // pagina de erro 404
    { 
        path: '**', 
        title: 'error 404',
        component: PageNotFoundComponent
    },

];
