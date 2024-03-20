import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_86 from './Form_86';
import Items_86 from './Items_86';
import { useState } from 'react';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_86 = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form_86 />
      <Items_86 items={items}/>
    </section>
  );
};
export default App_86;
