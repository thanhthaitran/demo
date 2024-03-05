import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configurations from './config';
import { configDb } from './config/const';
import { UserModule } from './module/user/user.module';

const modules = [UserModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configurations,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService): any => {
        return config.get(configDb);
      },
      inject: [ConfigService],
    }),
    ...modules,
  ],
})
export class MainModule {}
