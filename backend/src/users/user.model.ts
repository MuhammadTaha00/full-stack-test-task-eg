import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UserModel {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async create(user: RegisterDto): Promise<User> {
    const createdUser = await this.userModel.create(user);
    return createdUser;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
