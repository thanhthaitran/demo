import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './module/user/user.service';
import { UserModule } from './module/user/user.module';
import configurations from './config';
import { configDb } from './config/const';

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
  providers: [UserService],
})
export class MainModule {}
