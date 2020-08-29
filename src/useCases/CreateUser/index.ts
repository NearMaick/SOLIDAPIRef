import { FakeUsersRepository } from '../../repositories/implementations/FakeUsersRepository';
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const fakeUsersRepository = new FakeUsersRepository();
const mailTrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  fakeUsersRepository,
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
