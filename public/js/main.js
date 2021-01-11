// - ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'à 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// let multiplicateur = 5

// for (let i = 0; i <= 9; i++) {
//     console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`); 
// }

// - ## Exo 2
//     ## La même chose sauf qu'on incrémente par deux

// let multiplicateur = 5

// for (let i = 0; i <= 9; i+=2) {
//     console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`); 
// }


// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.

// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);  
// }

// version correction : let result = monTab.reverse().join('-');
// console.log(result);
// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

// let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

// let longPrenoms = [];


// for (let i = 0; i < coding16.length; i++) {
//     if (coding16[i].length > 5) {
//         longPrenoms.push(coding16[i]);
//     }
// }

// console.log(longPrenoms);

// - ## Exo 5
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//         sommes.splice(i, 1);
//     }
// }

// console.log(grossesSommes);
// console.log(sommes);

// - ## Exo 6
//     ##  Voici un tableau : 
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.


// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (let i = 0; i < donnees.length; i++) {
//     if (typeof donnees[i] == 'string') {
//         typeString.push(donnees[i]);
//         donnees.splice(i, 1);
//     } else if (typeof donnees[i] == 'number') {
//         typeNumber.push(donnees[i]);
//         donnees.splice(i, 1);
//     } else if (typeof donnees[i] == 'object') {
//         typeObject.push(donnees[i]);
//         donnees.splice(i, 1);
//     } else {
//         typeAutre.push(donnees[i]);
//         donnees.splice(i, 1);
//     }
// }

// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);









