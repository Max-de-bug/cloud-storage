export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
}

export type RegisterFormDTO = LoginFormDTO & { username: string };

export type RegisterResponseDTO = LoginResponseDTO;

export interface User {
  id: string;
  email: string;
  username: string;
}
