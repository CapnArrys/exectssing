import { MyDatabaseMetod } from "./db/my-database-metodo";
import { myDatabase } from "./module_a";

const myDatabaseClassic = MyDatabaseMetod;

myDatabaseClassic.add({ name: "Luiz", age: 30 });
myDatabaseClassic.add({ name: "Matheus", age: 18 });


myDatabaseClassic.remove(2);

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabase);
