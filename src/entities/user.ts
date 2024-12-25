export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserData extends User {
  _id: string;
}
