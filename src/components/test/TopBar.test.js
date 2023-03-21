// src/components/TopBar.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../utils/SearchContext';
import TopBar from '../TopBar';

const renderWithSearchProviderAndRouter = component => {
  return render(
    <SearchProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </SearchProvider>
  );
};

describe('TopBar', () => {
  test('renders logo', () => {
    renderWithSearchProviderAndRouter(<TopBar />);
    const logo = screen.getByAltText('Your Logo');
    expect(logo).toBeInTheDocument();
  });

  test('toggles search input visibility', () => {
    renderWithSearchProviderAndRouter(<TopBar />);
    const searchButton = screen.getByRole('button');
    const searchBar = screen.queryByPlaceholderText('Search Hero...');

    expect(searchBar).toBeNull();

    fireEvent.click(searchButton);

    const visibleSearchBar = screen.getByPlaceholderText('Search Hero...');
    expect(visibleSearchBar).toBeInTheDocument();
  });

  test('updates search term', () => {
    renderWithSearchProviderAndRouter(<TopBar />);

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    const searchBar = screen.getByPlaceholderText('Search Hero...');
    fireEvent.change(searchBar, { target: { value: 'Batman' } });

    expect(searchBar.value).toBe('Batman');
  });
});
