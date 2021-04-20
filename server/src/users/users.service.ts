import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  findOne(email: string, password: string): Promise<UsersEntity> {
    return UsersEntity.findOneOrFail({ where: { email, password }});
  }
}