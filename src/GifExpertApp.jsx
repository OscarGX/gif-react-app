import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (value) => {
    if (!categories.includes(value))
      setCategories([value, ...categories]);
  };

  return (
    <>
        <h1>Gif expert app</h1>
        <AddCategory onNewCategory={onAddCategory}/>
        { categories.map(category => (<GifGrid category={category} key={category}/>)) }
    </>
  )
}