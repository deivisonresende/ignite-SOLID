import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error(`The email:${email} has been already used`);
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
