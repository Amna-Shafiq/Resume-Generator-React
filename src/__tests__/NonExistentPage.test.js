import React from 'react';
import { render, screen } from '@testing-library/react';
import NonExistentPage from '../components/NonExistentPage'; // Adjust the import path as needed
import '@testing-library/jest-dom/extend-expect';

test('renders the "Page Not Found!!" heading', () => {
  render(<NonExistentPage />);
  const headingElement = screen.getByText('Page Not Found!!');
  expect(headingElement).toBeInTheDocument();
});