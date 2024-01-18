import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'NameTest1', description: 'Nombre de usuario' })
  name: string;

  @ApiProperty({ example: '99', description: 'Edad del usuario' })
  age: number;
}

export class UserDto {
  @ApiProperty({
    example: '1',
    description: 'Número agregado de manera automática',
  })
  id: number;

  @ApiProperty({ example: 'NameTest1', description: 'Nombre de usuario' })
  name: string;

  @ApiProperty({ example: '99', description: 'Edad del usuario' })
  age: number;
}
