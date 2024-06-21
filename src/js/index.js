// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/*

El dom es la representacion que tiene js del html. Cada etiqueta de html para js es un objeto.
Cada etiqueta tiene hijos, claslist, id ,tagname y text content.

-- Hijos: todas las etiquetas que tiene dentro
-- Classlist: las clases que tiene la etiqueta
-- Id: el id de la etiqueta
-- TagNAme: el nombre de la etiqueta (h1, div, etc)
-- Text content: el contenido de texto (en caso de tener texto)

En caso de tener una etiqueta dentro de otra hay objetos dentro de objetos. Es un matriosca (o ua matriz, una lista dentro de otra)

Document === el documetno html
Document.body === TODOS los html van a tener body
Document.body.children[0] === se accede a los hijos del body (cada uno de los hijos del body ocupa un lugar dentro del "array")

Para seleccionar un solo elemetno se hace a tavés de un id === getElementById
querySelector se utiliza SOLO cuando no puedes acceder a un elemento sin Id
cuando se quiere seleccionar varios elementos que tengan una misma condición se usa querySelectorAll ---> recibe cualquier selector de css (como string) da igual se piede usar cualquier combinación de selectores de css

const titleElemetent = document.getElementById('title');

console.dir(titleElemetent);
console.log(titleElemetent.clientWidth);
console.dir(titleElemetent.parentElement);
console.dir(titleElemetent.nextElementSibling);

para imprimir una etiqueta de ehmtl como objeto se usa console.dir */

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const h3Element = document.getElementById('start-point');

console.log(
  `Soy un h3 con el id ${h3Element.id} y la clase ${h3Element.classList}, mi padre es un header con el id ${h3Element.parentElement.id} y la clase ${h3Element.parentElement.classList}, mi hermano es un h1 con el id ${h3Element.parentElement.children[0].id} y la clase ${h3Element.parentElement.children[0].classList[0]} y ${h3Element.parentElement.children[0].classList[1]}y el contenido ${h3Element.parentElement.children[0].textContent}, mi otro hermano es un h2 con el id ${h3Element.previousElementSibling.id} y la clase ${h3Element.previousElementSibling.classList[0]} y ${h3Element.previousElementSibling.classList[1]} y el contenido ${h3Element.previousElementSibling.textContent}`
);

// - Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

const firstUlElement = document.getElementById('first-list');
const secondUlElement = document.getElementById('second-list');

const first = firstUlElement.textContent;
const second = secondUlElement.textContent;

firstUlElement.textContent = second;
secondUlElement.textContent = first;

/*
- Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
  - Hay 1 Header
  - Hay 1 h1
  - Hay 2 nav

*/

const headerCount = document.querySelectorAll('header');
console.log(`Hay ${headerCount.length} header`);

const h1Count = document.querySelectorAll('h1');
console.log(`Hay ${h1Count.length} h1`);

const navCount = document.querySelectorAll('nav');
console.log(`Hay ${navCount.length} nav`);

const ulCount = document.querySelectorAll('ul');
console.log(`Hay ${ulCount.length} ul`);

const liCount = document.querySelectorAll('li');
console.log(`Hay ${liCount.length} li`);

const sectionCount = document.querySelectorAll('section');
console.log(`Hay ${sectionCount.length} section`);

const articleCount = document.querySelectorAll('article');
console.log(`Hay ${articleCount.length} article`);

const h2Count = document.querySelectorAll('h2');
console.log(`Hay ${h2Count.length} h2`);

const pCount = document.querySelectorAll('p');
console.log(`Hay ${pCount.length} p`);

const aCount = document.querySelectorAll('a');
console.log(`Hay ${aCount.length} a`);

const imgCount = document.querySelectorAll('img');
console.log(`Hay ${imgCount.length} img`);

const spanCount = document.querySelectorAll('span');
console.log(`Hay ${spanCount.length} span`);

const footerCount = document.querySelectorAll('footer');
console.log(`Hay ${footerCount.length} footer`);
