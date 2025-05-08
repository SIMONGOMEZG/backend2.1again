import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.model.js';

export class UserService {
  static async createUser({ email, password, name }) {
    const hashed = await bcrypt.hash(password, 10);
    return await UserModel.create({ email, password: hashed, name });
  }

  static async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  static async validatePassword(user, password) {
    return await bcrypt.compare(password, user.password);
  }
  static async findById(id) {
    return await UserModel.findById(id);
  }
  
}
