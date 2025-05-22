// Ahora con un arreglo de personas, realiza lo siguiente:
    // 1. Usa .find() para buscar a la persona con nombre "Luis".
    // 2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
    // 3. Usa .reduce() para sumar todas las edades y obtener un total.

const personas = [
    { nombre : 'Fernando', edad : 22},
    { nombre : 'Elena', edad : 35},
    { nombre : 'Luis', edad : 28}
];

const personaLuis = personas.find(persona => persona.nombre === 'Luis');
console.log('Persona encontrada:', personaLuis);

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log('Suma total de edades:', totalEdades);