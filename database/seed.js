const Item = require('./index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shadowmoses', { useNewUrlParser: true } )
var items = [
  new Item({
    type: 'sweater',
    name: 'black sweater',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/1eeac8bc-6292-48b5-8172-26eb11a8647b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
    preview2: 'https://n.nordstrommedia.com/id/sr3/225daf37-8840-43ef-8770-9ea0abd78b03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
    price: 120
  }),
  new Item({
    type: 'sweater',
    name: 'black sweater',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/2b64f9c8-7504-4691-8dca-e9912917b10e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/ce472842-c410-4441-8922-72b1455f0080.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 120
  }),
  new Item({
    type: 'sweater',
    name: 'black sweater',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/35e7c8ee-d24d-484b-a368-93ab53204b2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/f57a4813-81e5-4ecf-9077-bc80f7127e42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 120
  }),
  new Item({
    type: 'sweater',
    name: 'black sweater',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/fc1c8946-ef6e-48b7-a010-736629345a12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/c1622a7f-48e5-46ba-a959-792c3846fd78.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 120
  }),
  new Item({
    type: 'sweater',
    name: 'black sweater',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/a86bd133-bfd8-40bf-9d92-590ed1ec3fc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/b0cdea6a-1426-49a2-a92b-f42552750b90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 120
  }),
  new Item({
    type: 'sweater',
    name: 'white sweater',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/f0486506-bc4a-4c7c-8e55-4aafb4bfec0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/407dc2c6-b4d9-41eb-85b4-53680184912b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 100
  }),
  new Item({
    type: 'sweater',
    name: 'white sweater',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/47cf8580-aae2-4f0f-a697-6ed7a215cb59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/6c7cfa73-dd06-4e38-9ff2-7f954792588a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 100
  }),
  new Item({
    type: 'sweater',
    name: 'white sweater',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/47fe21ca-5015-4338-87e6-0deacf624864.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/68b35c6d-95ef-408f-96ff-3a6cf525fd37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 100
  }),
  new Item({
    type: 'sweater',
    name: 'white sweater',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/f7a1faf5-fc4f-424e-baaf-e8e7def22191.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/864c4221-4fbd-4ee0-824f-5234ca86c1b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 100
  }),
  new Item({
    type: 'sweater',
    name: 'white sweater',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/303537ab-d13f-46cc-92ce-c936daac48c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/c283454e-09c6-486b-9469-74cb891fe465.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 100
  }),
  new Item({
    type: 'tshirt',
    name: 'black t-shirt',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/765a436a-7a2e-450f-80b6-ed98118ff79d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/4c3c2fbf-4949-4fea-8e19-0a0bbd11fc4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'black t-shirt',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/4fcb5b4b-bb79-4949-9f3a-d5d70bc9827d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/a80df4f7-0692-4c47-986f-8890ffc7cbb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'black t-shirt',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/8f465254-556c-4d08-8ba4-20d01410c704.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/2912d83b-d32d-4253-a843-6cf5c447fb3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'black t-shirt',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/e08ace24-73a4-43b5-925d-da726c112a8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/03c1b52f-cae9-4ecc-96ac-d307f4207cb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'black t-shirt',
    color: 'black',
    preview1: 'https://n.nordstrommedia.com/id/sr3/e08ace24-73a4-43b5-925d-da726c112a8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/03c1b52f-cae9-4ecc-96ac-d307f4207cb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'white t-shirt',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/744cd792-1525-4df6-8c6a-d8765d882686.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/d67bbd9d-95af-43e1-b69d-63074bc7bf38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'white t-shirt',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/1cc37627-4c5a-4459-8693-d314dac0c843.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/c419027c-ae07-4b21-923e-1ec766437b0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'white t-shirt',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/82a4d650-3b3f-4ff4-84fd-76c45359dc78.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/2b967e92-dead-4f54-81ff-368331ab676d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'white t-shirt',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/04137920-481c-47df-83b1-a4a92f751c51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/b1a614c1-5f72-4b27-81d3-75bff222e026.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
  new Item({
    type: 'tshirt',
    name: 'white t-shirt',
    color: 'white',
    preview1: 'https://n.nordstrommedia.com/id/sr3/0c1f0442-d9d9-4ca6-8a1b-850fbcd6e60d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    preview2: 'https://n.nordstrommedia.com/id/sr3/a017e355-ac98-4577-b378-cb789225c0e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2',
    price: 60
  }),
];

var done = 0;
for (let i = 0; i < items.length; i++) {
  items[i].save((err, result) => {
    done++;
    if (done === items.length) {
      mongoose.disconnect();
    }
  })
};

