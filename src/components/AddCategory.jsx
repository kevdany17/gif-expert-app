import { useState } from 'react';

export const AddCategory = ({ onNewValue }) => {
  const [value, setValue] = useState('One Piece');

  const onInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    onNewValue(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};
