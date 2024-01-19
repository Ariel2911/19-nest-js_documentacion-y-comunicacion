import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserDto } from '../dto/user.dto';

let UserId = 0;

@Injectable()
export class UsersService {
  users: UserDto[] = [];
  /**
   *
   * @param newUser
   * @returns Si los datos son correctos retorna los datos del usuario creado. Si son incorrectos retorna el mensaje: Datos incorrectos.
   */
  createUser(newUser: CreateUserDto): UserDto {
    if (newUser.hasOwnProperty('name') && newUser.hasOwnProperty('age')) {
      const user = { ...newUser, id: ++UserId };

      this.users.push(user);

      return user;
    } else {
      throw new Error('Datos incorrectos');
    }
  }

  getUsers(): UserDto[] {
    return this.users;
  }
  /**
   *
   * @param id
   * @param userToUpdate
   * @returns mensaje informando si la actualización fue exitosa o no
   */
  updateUser(id: number, userToUpdate: UserDto): string {
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

  /**
   *
   * @param id
   * @returns un mensaje espesificando si el usuario pudo ser eliminado
   */
  deleteUser(id: number): string {
    const indexUserToDelete = this.users.findIndex((user) => user.id === id);

    if (indexUserToDelete !== -1) {
      this.users = this.users.filter((user) => user.id !== id);

      return 'Usuario eliminado';
    }

    return 'Usuario no encontardo';
  }
}
