import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PesquisaModule } from './modules/pesquisa/pesquisa.module';
import { PerguntaModule } from './modules/pergunta/pergunta.module';
import { RespostaModule } from './modules/resposta/resposta.module';
import { PerguntaRespostaModule } from './modules/pergunta-resposta/perguntaResposta.module';
import { UsuarioPesquisaModule } from './modules/usuario-pesquisa/usuarioPesquisa.module';

@Module({
  imports: [
    UsuarioModule,
    UsuarioPesquisaModule,
    PesquisaModule,
    PerguntaModule,
    RespostaModule,
    PerguntaRespostaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
