import React from 'react';
import SearchBar from './header';

const MyComponent = () => {
  const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Watermelon'];

  return (
    <div>
      <h1>My Component</h1>
      <SearchBar data={data} />
    </div>
  );
};

export default MyComponent;