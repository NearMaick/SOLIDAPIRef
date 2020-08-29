import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/Users';

export class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const userFound = this.users.find(user => user.email === email);

    return userFound;
  }

  async save(user: User): Promise<void> {}
}
