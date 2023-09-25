import { Module } from '@nestjs/common';
import { TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from "./users/user.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'nest',
    entities: [User],
    synchronize: true, //dev environment
  }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


