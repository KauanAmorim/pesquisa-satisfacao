import { Module, ValidationPipe } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PesquisaModule } from './modules/pesquisa/pesquisa.module';
import { PerguntaModule } from './modules/pergunta/pergunta.module';
import { RespostaModule } from './modules/resposta/resposta.module';
import { PerguntaRespostaModule } from './modules/pergunta-resposta/perguntaResposta.module';
import { UsuarioPesquisaModule } from './modules/usuario-pesquisa/usuarioPesquisa.module';
import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { PesquisaCompletaModule } from './modules/pesquisa-completa/pesquisaCompleta.module';

@Module({
  imports: [
    DatabaseModule,
    UsuarioModule,
    UsuarioPesquisaModule,
    PesquisaModule,
    PerguntaModule,
    RespostaModule,
    PerguntaRespostaModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
