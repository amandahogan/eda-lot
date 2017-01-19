export const categories = [{
    id: 1,
    name: 'Funny Hats'
  },
  {
    id: 2,
    name: 'Furniture'
  },
  {
    id: 3,
    name: 'Yoga Equipment'
  },
  {
    id: 4,
    name: 'Animals'
  },
  {
    id: 5,
    name: 'Computer Equipment'
  },
  {
    id: 6,
    name: 'Kitchen'
  },
  {
    id: 7,
    name: 'FOB'
  }
]

export const items = [{
    id: 1,
    categoryId: 1,
    name: 'Dr Seuss Hat',
    image: '/images/FunnyHat.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Pharoh Hat',
    image: '/images/FunnyHat.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Sparkly Red Hat',
    image: '/images/FunnyHat.jpg',
    borrowed: true,
    by: 'Anna_U'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Spotty Hat',
    image: '/images/FunnyHat.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Rainbow Striped Hat',
    image: '/images/FunnyHat.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 6,
    categoryId: 1,
    name: 'Sombrero',
    image: '/images/FunnyHat.jpg',
    borrowed: true,
    by: 'Anna_G'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Bean Bag',
    image: '/images/furniture.jpeg',
    borrowed: false,
    by: null
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Chair',
    image: '/images/furniture.jpeg',
    borrowed: false,
    by: null
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Desk',
    image: '/images/furniture.jpeg',
    borrowed: false,
    by: null
  },
  {
    id: 10,
    categoryId: 3,
    name: 'Yoga Mat',
    image: '/images/yoga.jpg',
    borrowed: true,
    by: 'Jess'
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Block',
    image: '/images/yoga.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Strap',
    image: '/images/yoga.jpg',
    borrowed: true,
    by: 'David'
  },
  {
    id: 13,
    categoryId: 4,
    name: 'Daisy',
    image: '/images/animals.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 14,
    categoryId: 5,
    name: 'Keyboard',
    image: '/images/computerequip.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 15,
    categoryId: 5,
    name: 'Mouse',
    image: '/images/computerequip.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 16,
    categoryId: 5,
    name: 'Monitor',
    image: '/images/computerequip.jpg',
    borrowed: true,
    by: 'Rich'
  },
  {
    id: 17,
    categoryId: 6,
    name: 'Big Plate',
    image: '/images/kitchen.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 18,
    categoryId: 6,
    name: 'Set of Cutlery',
    image: '/images/kitchen.jpg',
    borrowed: true,
    by: 'Quinn'
  },
  {
    id:  19,
    categoryId: 6,
    name: 'Small Plate',
    image: '/images/kitchen.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 20,
    categoryId: 6,
    name: 'Bowl',
    image: '/images/kitchen.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 21,
    categoryId: 6,
    name: 'Mug',
    image: '/images/kitchen.jpg',
    borrowed: true,
    by: 'Amanda'
  },
  {
    id: 22,
    categoryId: 6,
    name: 'Glass',
    image: '/images/kitchen.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 23,
    categoryId: 7,
    name: 'FOB_1',
    image: '/images/fob.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 24,
    categoryId: 7,
    name: 'FOB_2',
    image: '/images/fob.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 24,
    categoryId: 7,
    name: 'FOB_3',
    image: '/images/fob.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 25,
    categoryId: 7,
    name: 'FOB_4',
    image: '/images/fob.jpg',
    borrowed: true,
    by: 'Ti'
  },
  {
    id: 26,
    categoryId: 7,
    name: 'FOB_5',
    image: '/images/fob.jpg',
    borrowed: false,
    by: null
  },
  {
    id: 27,
    categoryId: 7,
    name: 'FOB_6',
    image: '/images/fob.jpg',
    borrowed: false,
    by: null
  },
]

export const users = [{
  {
    id: 001,
    name: 'Alice',
    itemId: null,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars2.githubusercontent.com/u/11096313?v=3&s=96'
  },
  {
    id: 002,
    name: 'Amanda',
    itemId: 21,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars2.githubusercontent.com/u/20230839?v=3&s=96'
  },
  {
    id: 003,
    name: 'Anna_G',
    itemId: 6,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars0.githubusercontent.com/u/22289088?v=3&s=96'
  },
  {
    id: 004,
    name: 'Anna_U',
    itemId: 3,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars0.githubusercontent.com/u/19509465?v=3&s=96'
  },
  {
    id: 005,
    name: 'David',
    itemId: 10,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars1.githubusercontent.com/u/12044333?v=3&s=96'
  },
  {
    id: 006,
    name: 'Jess',
    itemId: 12,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars3.githubusercontent.com/u/22064356?v=3&s=96'
  },
  {
    id: 007,
    name: 'Don',
    itemId: null,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars3.githubusercontent.com/u/228761?v=3&s=96'
  },
  {
    id: 008,
    name: 'Quinn',
    itemId: 18,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars1.githubusercontent.com/u/16204154?v=3&s=96'
  },
  {
    id: 009,
    name: 'Rich',
    itemId: 16,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars0.githubusercontent.com/u/171905?v=3&s=96'
  },
  {
    id: 010,
    name: 'Ti',
    itemId: 25,
    email: 'actualEmail@completelyReal.com',
    image: 'https://avatars1.githubusercontent.com/u/18096040?v=3&s=96'
  }
}]
