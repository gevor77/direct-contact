import {DateInfo} from '../app.config';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  dateCreate?: DateInfo;
  auth?: string;
  client?: string;
  auth_time?: DateInfo;
  photos?: Array<Object>;
}
