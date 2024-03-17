import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudAPIsService {
    getResource(): string {
        return 'resource is retrieved!';
    }

    postResource(): string {
        return 'resource is created!';
    }

    putResource(): string {
        return 'resource is updated!';
    }

    deleteResource(): string {
        return 'resource is deleted!';
    }
}
