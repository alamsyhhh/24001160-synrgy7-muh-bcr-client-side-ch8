import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderSection from '../section/headerSection';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('HeaderSection', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders HeaderSection with Sign In button', () => {
    renderWithRouter(<HeaderSection />);
    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  test('renders HeaderSection with Sign Out button when user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
    localStorage.setItem('token', 'testtoken');
    renderWithRouter(<HeaderSection />);
    const signOutButton = screen.getByText('Sign Out');
    expect(signOutButton).toBeInTheDocument();
  });

  test('shows modal when Sign Out button is clicked', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));
    localStorage.setItem('token', 'testtoken');
    renderWithRouter(<HeaderSection />);
    const signOutButton = screen.getByText('Sign Out');
    fireEvent.click(signOutButton);
    const modalTitle = screen.getByText('Confirm Logout');
    expect(modalTitle).toBeInTheDocument();
  });
});
