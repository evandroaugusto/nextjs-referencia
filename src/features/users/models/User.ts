import { Address } from './Address';
import { Name } from './Name';

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
};
