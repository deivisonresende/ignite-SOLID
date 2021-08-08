import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const users = this.usersRepository.list();
    const userExists = users.find((user) => user.id === user_id);
    if (!userExists) {
      throw new Error(`User not found`);
    }
    return userExists;
  }
}

export { ShowUserProfileUseCase };
