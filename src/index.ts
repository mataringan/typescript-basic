let namagw: string = "Taofik Arianto";

let username: number = 123;

console.log({ namagw });
console.log({ username });

// Ordinary Array
let mhs: string[];
mhs = ["Mata", "Fikar"];
console.log({ mhs });

// tuple array
let member: [string, number, boolean];
member = ["Jamal", 25, true];
console.log({ member });

//TIPE DATA CUSTOM

type BookType = {
  author: string;
  isSold: boolean;
  price?: number;
};

let book: BookType;

book = {
  author: "Raditya Dika",
  isSold: true,
};

console.log({ book });
