import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CrudAPIsController } from './crudAPIs.controller'
import { AppService } from './app.service';
import { CrudAPIsService } from './crudAPIs.service'

@Module({
  imports: [],
  controllers: [AppController, CrudAPIsController],
  providers: [AppService, CrudAPIsService],
})
export class AppModule { }
