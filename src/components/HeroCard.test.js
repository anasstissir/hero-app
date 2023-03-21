import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroCard from './HeroCard';

const hero = {
  id: 1,
  name: 'Superman',
  images: {
    md: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-superman.jpg',
  },
};

test('renders hero card with name and image', () => {
  render(<HeroCard hero={hero} />);
  const nameElement = screen.getByText(/Superman/i);
  const imageElement = screen.getByAltText(/Superman/i);

  expect(nameElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-superman.jpg');
});
