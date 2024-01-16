import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserDto } from '../dto/user.dto';
let UserId = 0;

@Injectable()
export class UsersService {
  users: UserDto[] = [];

  createUser(newUser: CreateUserDto): UserDto {
    const user = { ...newUser, id: ++UserId };

    this.users.push(user);

    return user;
  }

  getUsers(): UserDto[] {
    return this.users;
  }

  updateUser(id: number, userToUpdate: UserDto) {
    const indexUserToUpdate = this.users.findIndex((user) => user.id === id);

    if (indexUserToUpdate !== -1) {
      this.users = this.users.map((user) => {
        if (user.id === id) {
          user = { ...user, ...userToUpdate };
        }

        return user;
      });

      return 'Usuario modificado';
    }

    return 'Usuario no encontardo';
  }

  deleteUser(id: number) {
    const indexUserToDelete = this.users.findIndex((user) => user.id === id);

    if (indexUserToDelete !== -1) {
      this.users = this.users.filter((user) => user.id !== id);

      return 'Usuario eliminado';
    }

    return 'Usuario no encontardo';
  }
}
