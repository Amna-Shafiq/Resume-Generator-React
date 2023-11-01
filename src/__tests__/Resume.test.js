import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from '../components/Resume';
import '@testing-library/jest-dom/extend-expect';

const mockUserObject = {
  firstName: 'Amna',
  lastName: 'Shafiq',
  profile: 'A profile summary',
  phoneNumber: '123-456-7890',
  email: 'amna.shafiq.r@gmail.com',
  website: 'https://example.com',
  skills: 'React, JavaScript',
  experience: 'Front-end Developer',
  university: 'Example University',
  accomplishments: 'Achievement 1, Achievement 2',
  graduationYear: '2022',
};

test('renders the full name', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const fullNameElement = screen.getByText('Amna Shafiq');
  expect(fullNameElement).toBeInTheDocument();
});

test('renders the summary', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const summaryElement = screen.getByText('Summary');
  expect(summaryElement).toBeInTheDocument();
});

test('renders the contact information', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const phoneNumberElement = screen.getByText('123-456-7890');
  const emailElement = screen.getByText('amna.shafiq.r@gmail.com');
  const websiteElement = screen.getByText('https://example.com');
  expect(phoneNumberElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(websiteElement).toBeInTheDocument();
});

test('renders the skills', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const skillsElement = screen.getByText('React, JavaScript');
  expect(skillsElement).toBeInTheDocument();
});

test('renders the experience', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const experienceElement = screen.getByText('Front-end Developer');
  expect(experienceElement).toBeInTheDocument();
});

test('renders the university', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const universityElement = screen.getByText('Example University');
  expect(universityElement).toBeInTheDocument();
});

test('renders the accomplishments', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const accomplishmentsElement = screen.getByText('Achievement 1, Achievement 2');
  expect(accomplishmentsElement).toBeInTheDocument();
});

test('renders the graduation year', () => {
  render(<Resume imageSource="" userObject={mockUserObject} />);
  const graduationYearElement = screen.getByText('CLASS OF 2022');
  expect(graduationYearElement).toBeInTheDocument();
});
