import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host:
          configService.getOrThrow('DATABASE_DOCKER_HOST') ||
          configService.getOrThrow('DATABASE_HOST'),
        port: configService.getOrThrow<number>('DATABASE_PORT'),
        username: configService.getOrThrow('DATABASE_USERNAME'),
        password: configService.getOrThrow('DATABASE_PASSWORD'),
        database: configService.getOrThrow('DATABASE_DATABASE'),
        logging: configService.getOrThrow<boolean>('DATABASE_LOG'),
        autoLoadEntities: true,
      }),
    }),
  ],
  providers: [],
  exports: [TypeOrmModule], // Exportando o TypeOrmModule para uso em outros módulos
})
export class DatabaseModule {}
