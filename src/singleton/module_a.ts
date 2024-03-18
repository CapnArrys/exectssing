import { MyDatabaseMetod } from "./db/my-database-metodo";

const myDatabase = MyDatabaseMetod;


myDatabase.add({ name: 'Joana', age: 50 });

export { myDatabase };