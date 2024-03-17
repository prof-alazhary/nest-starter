import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CrudAPIsService } from './crudAPIs.service';

@Controller('api')
export class CrudAPIsController {
    constructor(private readonly crudAPIsService: CrudAPIsService) { }

    @Get('retrieve')
    getResource(): string {
        return this.crudAPIsService.getResource();
    }

    @Post('create')
    postResource(): string {
        return this.crudAPIsService.postResource();
    }

    @Put('update')
    putResource(): string {
        return this.crudAPIsService.putResource();
    }

    @Delete('delete')
    deleteResource(): string {
        return this.crudAPIsService.deleteResource();
    }
}
