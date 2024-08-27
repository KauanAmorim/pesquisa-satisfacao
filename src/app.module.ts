import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PesquisaModule } from './modules/pesquisa/pesquisa.module';
import { PerguntaModule } from './modules/pergunta/pergunta.module';
import { RespostaModule } from './modules/resposta/resposta.module';
import { PerguntaRespostaModule } from './modules/pergunta-resposta/pergunta-resposta.module';

@Module({
  imports: [
    UsuarioModule,
    PesquisaModule,
    PerguntaModule,
    RespostaModule,
    PerguntaRespostaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
