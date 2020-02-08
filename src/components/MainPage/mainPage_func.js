export const fakeData = [
  {
    id: 1,
    name: "firstItem",
    photo: "photo1",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 2,
    name: "secondItem",
    photo: "photo2",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 3,
    name: "thirdItem",
    photo: "photo3",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 4,
    name: "firstItem",
    photo: "photo4",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 5,
    name: "firstItem",
    photo: "photo5",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 6,
    name: "firstItem",
    photo: "photo6",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 7,
    name: "firstItem",
    photo: "photo7",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 8,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 9,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 10,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 11,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 12,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    color: "green",
    quantity: 12
  },
  {
    id: 13,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    color: "green",
    quantity: 12
  }
];

export async function getProducts() {
  const url = "https://sheltered-depths-11645.herokuapp.com/products";
  const response = await fetch(url, {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });
  const myJson = await response.json();
  console.log('get products');
  return myJson;
}


export async function getOrders() {
  const url = "https://sheltered-depths-11645.herokuapp.com/orders";
  const response = await fetch(url, {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });
  const myJson = await response.json();
  console.log('get orders');
  return myJson;
}