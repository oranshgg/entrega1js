const arrayPizzas = [
    {
        id: 1,
        nombre: 'muzzarella',
        ingredientes: [
            'salsa',
            'queso',
            'oregano'
        ],
        precio: 100
    },
    {
        id: 2,
        nombre: 'muzzarella y jamon',
        ingredientes: [
            'salsa',
            'queso',
            'jamon',
            'oregano'
        ],
        precio: 150
    },
    {
        id: 3,
        nombre: 'napolitana',
        ingredientes: [
            'salsa',
            'queso',
            'tomate',
            'ajo'
        ],
        precio: 700
    },
    {
        id: 4,
        nombre: 'fugazzeta',
        ingredientes: [
            'salsa',
            'queso',
            'cebolla',
        ],
        precio: 120
    },
    {
        id: 5,
        nombre: 'fugazza',
        ingredientes: [
            'salsa',
            'cebolla',
        ],
        precio: 100
    },
    {
        id: 6,
        nombre: 'jamón y morrones',
        ingredientes: [
            'salsa',
            'queso',
            'jamon',
            'morrones'
        ],
        precio: 100
    }
];

/** ACTIVIDAD 1 - id impares */

const act1 = [];

const esPar = (num) => {
    return (num % 2) === 0;
};

arrayPizzas.forEach(pizza => {
    if (!esPar(pizza.id)) {
        act1.push(pizza.id);
    }
});

console.log(`Las pizzas con ID impar son las pizzas con los id ${act1}`);


/** ACTIVIDAD 2 ¿Hay alguna pizza que valga menos de $600?*/

const act2 = [];

arrayPizzas.forEach(pizza => {
    if (pizza.precio > 600) {
        act2.push(pizza.nombre);
    }
});

if (act2.length > 0){
    console.log(`Las pizzas con un precio mayor a 600 son ${act2}`);
} else {
    console.log(`No hay pizzas con un precio mayor a 600`);
}


/** ACTIVIDAD 3 El nombre de cada pizza con su respectivo precio.*/

nombres = [];
precios = [];

arrayPizzas.forEach(pizza => {
    nombres.push(pizza.nombre);
    precios.push(pizza.precio);
});

console.log('Listado de pizzas y sus nombres:');
for (let i = 0; i < nombres.length; i++) {
    console.log(`${nombres[i]} - precio: ${precios[i]}`);
}


/** ACTIVIDAD 4 Todos los ingredientes de cada pizza*/

nombres = [];
ingredientes = [];

arrayPizzas.forEach(pizza => {
    nombres.push(pizza.nombre);
    ingredientes.push(pizza.ingredientes);
})

console.log('Listado de pizzas y sus ingredientes');
for (let i = 0; i < nombres.length; i++) {
    console.log(`${nombres[i]} - ingredientes: ${ingredientes[i]}`);
}


