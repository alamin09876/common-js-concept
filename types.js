
// javaScript is a dynamic type language . coz ai khena data decleare korar time a type bola dita hoi na
// number, string, boolean primative data type . primative data type 1 ta value rakha 
const a = 12;
const b= 'Alamin';
const d = true; 

// array, object non primative data type. ar moddha akadhik value assign kora jai
const ages = [12, 13, 14];

const student = {Id : 12, class : 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student)

// primative value ta full value change na korla o purano valo show kora ar jaita ar jonno value assign kora hoi oitai new value show kora 
let x = 5;
let y = x;
y = 7
// console.log(x, y)

// non primative a jodi full value change na kora hoi ta hola agar valo ar show kora na porar assign value e show korba shoub jaigai

let p = {job : "web developer"}
let q = p
// q = {job : "front end developer"}
q.job = 'front end developer';
console.log(p, q)
