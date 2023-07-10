const products = [
    {
        id:1,
        name:'Postre de Leche',
        price:10000,
        category: 'Chocolate',
        img:'',
        stock: 20,
        description:'Hola soy la descripción del producto'
    },
    {
        id:2,
        name:'torta',
        price:15000,
        category: 'Chocolate',
        img:'',
        stock: 10,
        description:'Descripción de otro producto'
    }
]


export const getProducts = () =>{
    return new Promise ( (resolve) => {
        setTimeout (()=>{
            resolve(products)
        }, 500);
    }

    )
}