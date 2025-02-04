import { User } from "../interface/user"; // export default MyDatabaseClassic;

const users: User[] = [];

export class MyDatabaseMetod {
  add(user: User): void {
    users.push(user);
  }

  remove(index: number): void {
    users.splice(index, 1);
  }

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  }
}
