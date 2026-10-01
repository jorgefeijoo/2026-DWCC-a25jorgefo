const television = {
  marca: 'Lg',
  categorias: 'televisores',
  unidades: 4,
  prezo: 354.99,
  importe() {
    return `EL precio final es: ${television.unidades * television.prezo}`;
  },
};

console.log(television.importe());
