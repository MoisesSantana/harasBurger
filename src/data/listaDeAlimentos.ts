interface AlimentosValue {
  tipo: string;
  lista: Array<{
    nome: string,
    preco: number,
    acompanhamento: Array<string>,
    ingredientes: Array<string>,
  }>;
}

interface FiltrosValue {
  nome: string;
  tags: Array<string>;
}

export const alimentos: Array<AlimentosValue> = [
  {
    tipo: 'Promoções',
    lista: [
      {
        nome: 'Hamburguer em Dobro',
        preco: 13,
        acompanhamento: [],
        ingredientes: [],
      },
    ],
  },
  {
    tipo: 'Trios',
    lista: [
      {
        nome: 'Simples',
        preco: 13,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          'carne',
          'queijo',
          'presunto',
          'calabresa',
          'salada',
          'molho',
        ],
      },
      {
        nome: 'Talentos',
        preco: 14,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          'carne',
          'queijo',
          'presunto',
          'ovo',
          'bacon',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Ambicioso',
        preco: 18,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '2 carnes',
          '2 ovos',
          'queijo',
          'presunto',
          'bacon',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Zorro',
        preco: 17,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          'filé de frango',
          'queijo',
          'presunto',
          'bacon',
          'ovo',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Elegante',
        preco: 20,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '3 carnes',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Impetuoso',
        preco: 19,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '2 filés de frango',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Cavalo de Troia',
        preco: 22,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '4 carnes',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Pegasus',
        preco: 22,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '3 filés de frango',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Guloso',
        preco: 17,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '3 carnes',
          'bacon',
          'cebola',
          'dobro cheddar',
        ],
      },
      {
        nome: 'Touro Bandido',
        preco: 21,
        acompanhamento: ['Guaracamp', 'Batata'],
        ingredientes: [
          'pão',
          '5 carnes',
          'bacon',
          'cebola',
          'dobro cheddar',
        ],
      },
    ],
  },
  {
    tipo: 'Sanduíche',
    lista: [
      {
        nome: 'Simples',
        preco: 6,
        acompanhamento: [],
        ingredientes: [
          'pão',
          'carne',
          'queijo',
          'presunto',
          'calabresa',
          'salada',
          'molho',
        ],
      },
      {
        nome: 'Talentos',
        preco: 7,
        acompanhamento: [],
        ingredientes: [
          'pão',
          'carne',
          'queijo',
          'presunto',
          'ovo',
          'bacon',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Ambicioso',
        preco: 11,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '2 carnes',
          '2 ovos',
          'queijo',
          'presunto',
          'bacon',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Zorro',
        preco: 10,
        acompanhamento: [],
        ingredientes: [
          'pão',
          'filé de frango',
          'queijo',
          'presunto',
          'bacon',
          'ovo',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Elegante',
        preco: 13,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '3 carnes',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Impetuoso',
        preco: 12,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '2 filés de frango',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Cavalo de Troia',
        preco: 15,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '4 carnes',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Pegasus',
        preco: 15,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '3 filés de frango',
          'queijo',
          'presunto',
          'bacon',
          '2 ovos',
          'calabresa',
          'salada',
          'cheddar',
          'molho especial',
        ],
      },
      {
        nome: 'Guloso',
        preco: 10,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '3 carnes',
          'bacon',
          'cebola',
          'dobro cheddar',
        ],
      },
      {
        nome: 'Touro Bandido',
        preco: 14,
        acompanhamento: [],
        ingredientes: [
          'pão',
          '5 carnes',
          'bacon',
          'cebola',
          'dobro cheddar',
        ],
      },
    ],
  },
  {
    tipo: 'Porções',
    lista: [
      {
        nome: 'Porção pequena',
        preco: 10,
        acompanhamento: [],
        ingredientes: [
          'batata',
          'calabresa',
          'cheddar',
        ],
      },
      {
        nome: 'Porção média',
        preco: 15,
        acompanhamento: [],
        ingredientes: [
          'batata',
          'calabresa',
          'cheddar',
        ],
      },
      {
        nome: 'Porção grande',
        preco: 20,
        acompanhamento: [],
        ingredientes: [
          'batata',
          'calabresa',
          'cheddar',
        ],
      },
    ],
  },
  {
    tipo: 'Bebidas',
    lista: [
      {
        nome: 'Guaraná Antarctica 1L',
        preco: 6,
        acompanhamento: [],
        ingredientes: [],
      },
      {
        nome: 'Guaracamp',
        preco: 2,
        acompanhamento: [],
        ingredientes: [],
      },
      {
        nome: 'Coca-Cola 1,5L',
        preco: 7,
        acompanhamento: [],
        ingredientes: [],
      },
      {
        nome: 'Coca-Cola lata 350ml',
        preco: 5,
        acompanhamento: [],
        ingredientes: [],
      },
    ],
  },
];

export const filtros: Array<FiltrosValue> = [
  {
    nome: 'Todos',
    tags: ['Sanduíche', 'Trios', 'Porções', 'Bebidas', 'Promoções'],
  },
  {
    nome: 'Sanduíche',
    tags: ['Sanduíche'],
  },
  {
    nome: 'Trios',
    tags: ['Trios'],
  },
  {
    nome: 'Porção',
    tags: ['Porções'],
  },
  {
    nome: 'Bebidas',
    tags: ['Bebidas'],
  },
  {
    nome: 'Promoção',
    tags: ['Promoções'],
  },
];
