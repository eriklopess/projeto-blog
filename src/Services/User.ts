import { User } from '../interfaces/UserInterface';
import UserModel from '../model/User';
import Service from './Service';

export default class UserService extends Service<User> {
  constructor(model = new UserModel()) {
    super(model);
  }

  public async create(obj: User): Promise<User | null> {
    return this.model.create(obj);
  }

  public async read(): Promise<User[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<User | null> {
    return this.model.readOne(id);
  }

  public async update(id: string, obj: User): Promise<User | null> {
    return this.model.update(id, obj);
  }

  public async delete(id: string): Promise<User | null> {
    return this.model.delete(id);
  }
}
