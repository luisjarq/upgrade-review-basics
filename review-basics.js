//Iteración#1
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
let categories = [];
for (const movie of movies) {
  for (const cat of movie.categories) {
    if (!categories.includes(cat)) {
      categories.push(cat);
    }
  }
}
console.log(categories);
//Iteración#2
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let averages = [];
for (const user of users) {
  let avg = 0;
  let count = 0;
  for (const prop in user.favoritesSounds) {
    avg += user.favoritesSounds[prop].volume;
    count++;
  }
  averages.push(user.name, avg / count);
}
console.log(averages);
//Iteracion#3
const users2 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
function repeatCounter(param) {
  let result = [];
  let counter = [];
  if (Array.isArray(param)) {
    param.forEach((d) => {
      if (counter.indexOf(d) < 0) {
        counter.push(d);
        result.push([d, 1]);
      } else {
        result[counter.indexOf(d)][1]++;
      }
    });
    return result;
  } else {
    return "No es un array";
  }
}
let mostUsed = [];
for (const user of users) {
  let avg = 0;
  let count = 0;
  for (const prop in user.favoritesSounds) {
    mostUsed.push(prop);
  }
}
console.log(repeatCounter(mostUsed));
//Iteracion#4
const array = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
function findArrayIndex(array, text) {
  if (Array.isArray(array, text)) {
    if (array.indexOf(text) > 0) {
      return array.indexOf(text);
    } else {
      return false;
    }
  } else {
    return "No es un array";
  }
}
console.log(findArrayIndex(array, ""));
//Iteracion#5
function rollDice(faces) {
  let random = Math.random() * (faces - 1) + 1;
  return Math.round(random);
}
console.log(rollDice(8));
//Iteracion#6
const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
function swap(array, indexA, indexB) {
  let a = array[indexA];
  let b = array[indexB];
  array.splice(indexA, 1, b);
  array.splice(indexB, 1, a);
  return array;
}
console.log(swap(array, 1, 2));

