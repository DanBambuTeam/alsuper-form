

export interface User{
  name: string,
  lastname: string,
  email: string,
  cellphone: string,
  password: string,
  type: string
}

export interface CreateUserDTO{}

export interface LoginUserDTO extends Omit<User, 'name'|'lastname'|'cellphone'|'type'>{}

export interface restorePasswordDTO extends Omit<User, 'name'|'lastname'|'cellphone'|'type'|'password'>{}


