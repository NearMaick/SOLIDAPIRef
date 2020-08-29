import { v4 as uuid } from 'uuid';

export class User {
  public readonly id: string | undefined;

  public name: string | undefined;

  public email: string | undefined;

  public password: string | undefined;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
