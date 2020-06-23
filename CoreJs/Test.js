// Iterators : filter, map, reduce and some

let persons = [
        {id : 1, name : "John",  tags : "javascript"},
        {id : 2, name : "Alice", tags : "javascript"},
        {id : 3, name : "Roger", tags : "java"},
        {id : 4, name : "Adam",  tags : "javascript"},
        {id : 5, name : "Alex",  tags : "java"}
    ];

//Filter : give me the list of persons who's tag is javascript

let persJavasscript = persons.filter((person) => person.tags === "javascript")

console.log(persJavasscript);

//Map : give me the list of names who's tag is javascript

let persNamesJavasscript = persons.map((person) => person.tags === "javascript" ? person.name : "").filter(obj => obj != "")

console.log(persNamesJavasscript);

console.log(persons); // not manipulated in base object