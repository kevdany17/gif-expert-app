import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [offset, setOffset] = useState(0);
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (value) => {
    if (
      !categories.findIndex(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    )
      return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
