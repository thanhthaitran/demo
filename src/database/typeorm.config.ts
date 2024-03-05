import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
config();
const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('ORM_HOST'),
  port: configService.get('ORM_PORT'),
  username: configService.get('ORM_USERNAME'),
  password: configService.get('ORM_PASSWORD'),
  database: configService.get('ORM_DB'),
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  migrations: ['./src/database/migrations/*.ts'],
});
