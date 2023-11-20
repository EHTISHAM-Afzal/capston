export const DishData = [
  {
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    name: "Salad",
    price: 12,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80",
    name: "Eggs",
    price: 9,
    description:
      "The famous pasta of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 3,
    name: "Pasta",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80",
    price: 14,
    description:
      "The famous Mac'n chees crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 4,
    name: "Kebab",
    img: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg",
    price: 16,
    description:
      "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
  },
  {
    id: 5,
    name: "Chees",
    img: "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
    price: 13,
    description:
      "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
  },
  {
    id: 6,
    name: "Freis",
    img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 12,
    description:
      "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
  },
  {
    id: 7,
    name: "Leafy",
    img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 13,
    description:
      "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
  },
  {
    id: 8,
    name: "Mac'n",
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 11,
    description:
      "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
  },
];


//// This data is generated from above array with the help of this function 
// function generateHex() {
//   let hex = '';
//   for(let i = 0; i < 24; i++) {
//       hex += Math.floor(Math.random() * 16).toString(16);
//   }
//   return hex;
// }


// const transformedData = DishData.map((item) => {
//   return {
//     _id: {
//       $oid: generateHex()
//     },
//     name: item.name,
//     price: item.price,
//     description: item.description,
//     img: item.img,
//     category: {
//       $oid: "655a2dd7f216305bcdb45c8d",
//     },
//     __v: 0,
//   };
// });

// [
//   {
//       "_id": {
//           "$oid": "27bc6727fa2326fab68345f8"
//       },
//       "name": "Salad",
//       "price": 12,
//       "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
//       "img": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "c2d582cc8b0baa588451934d"
//       },
//       "name": "Eggs",
//       "price": 9,
//       "description": "The famous pasta of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
//       "img": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "d4024e5b010313170b4fb412"
//       },
//       "name": "Pasta",
//       "price": 14,
//       "description": "The famous Mac'n chees crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
//       "img": "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "83da8440cb4351724f8f3689"
//       },
//       "name": "Kebab",
//       "price": 16,
//       "description": "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
//       "img": "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "76b87efc2c31c49f6c28706f"
//       },
//       "name": "Chees",
//       "price": 13,
//       "description": "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
//       "img": "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "809ae736633e6a3b6baf9f00"
//       },
//       "name": "Freis",
//       "price": 12,
//       "description": "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
//       "img": "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "2cfe69d86840a9562746d8b8"
//       },
//       "name": "Leafy",
//       "price": 13,
//       "description": "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
//       "img": "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   },
//   {
//       "_id": {
//           "$oid": "b1b46aecfab449df591fd4fa"
//       },
//       "name": "Mac'n",
//       "price": 11,
//       "description": "Lorem ipsum dolor sit amet consecteturtables adipisicinggreserv elit. facere, explicabo alias enim minus, necessitatibus amet cum expedita corporis esse libero quaerat repudiandae facilis?,",
//       "img": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "category": {
//           "$oid": "655a2dd7f216305bcdb45c8d"
//       },
//       "__v": 0
//   }
// ]