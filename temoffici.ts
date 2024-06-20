var a: String = "test"; 
var b: string = "another test"; 
a = b; // This gives a compiler error because 'String' is not assignable to 'string'
b = a; // This also gives a compiler error
