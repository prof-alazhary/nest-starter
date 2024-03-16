import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CrudAPIsController } from './crudAPIs.controller'
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CrudAPIsController],
  providers: [AppService],
})
export class AppModule { }
