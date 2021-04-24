import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService  
  ) {}

  validateUser(email: string, password: string): Promise<UsersEntity> {
    return this.usersService.findOne(email, password);
  }

  login(user: UsersEntity) {
    return {
      access_token: this.jwtService.sign({ email: user.email, id: user.id }),
      role: user.role,
    };
  }
}
