import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import { render, screen, fireEvent } from '@testing-library/react';
import PromptUser from '../components/PromptUser'; // Adjust the import path as needed
import '@testing-library/jest-dom/extend-expect';

// Mock user object
const mockUserObject = {
  firstName: 'Amna',
  lastName: 'Shafiq',
  email: 'amna.shafiq.r@gmail.com',
  phoneNumber: '123-456-7890',
  website: 'https://example.com',
  skills: 'React, JavaScript',
  experience: 'Front-end Developer',
  graduationYear: '2023',
  accomplishments: 'Achievement 1, Achievement 2',
  profile: 'A profile summary',
};
test('renders the component header', () => {
  render(
    <Router>
      <PromptUser userObject={mockUserObject} imageSource="" handleChange={() => {}} />
    </Router>
  );
  const headerElement = screen.getByText('Resume Maker', { selector: '.bounce-text' });
  expect(headerElement).toBeInTheDocument();
});



