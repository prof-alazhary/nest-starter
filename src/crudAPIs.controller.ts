import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api')
export class CrudAPIsController {

    @Get('retrieve')
    getResource(): string {
        return 'resource is retrieved!';
    }

    @Post('create')
    postResource(): string {
        return 'resource is created!';
    }

    @Put('update')
    putResource(): string {
        return 'resource is updated!';
    }

    @Delete('delete')
    deleteResource(): string {
        return 'resource is deleted!';
    }
}
