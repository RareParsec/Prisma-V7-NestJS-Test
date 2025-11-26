import { Injectable } from '@nestjs/common';
import { Prisma, User } from './generated/prisma/client';

@Injectable()
export class AppService {
  getHello(): string {
    const prisma = Prisma;
    const prismaImportType = {} as User;

    return 'Hello World!';
  }
}
