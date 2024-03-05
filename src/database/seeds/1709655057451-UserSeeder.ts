import { UserEntity } from 'src/module/user/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserSeeder1709655057451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(UserEntity).save({
      name: 'name',
      email: 'email@gmail.com',
    });
  }

  public async down(): Promise<void> {
    //
  }
}
