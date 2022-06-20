import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TabelaTreinoComponent } from './views/tabela-treino/tabela-treino.component';
import { PlanosComponent } from './views/planos/planos.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "tabela",
  component: TabelaTreinoComponent
},
{
  path: "planos",
  component: PlanosComponent
}
,
{
  path: "cadastro",
  component: CadastroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
