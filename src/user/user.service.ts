/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createOrUpdate(user: UserEntity) {
    const hash = await bcrypt.hash(user.getPassword(), 10);
    user.setPassword(hash);
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({
      email: email,
    });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.getPassword());
      if (isMatch) {
        return user;
      }
    }
    return null;
  }
}
