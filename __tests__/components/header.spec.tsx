import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useRouter } from 'next/navigation';

import { mockDiv } from '@tests/mocks/components';

import { Header } from '@/components/header';
import { ROUTES } from '@/constants/routes';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock('@/components/logo', () => ({
  Logo: mockDiv,
}));

describe('<Header />', () => {
  const mockPush = jest.fn();
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('should render user email and logout button when user is logged in', () => {
    const user = { email: 'test@example.com' };
    render(<Header user={user} logout={mockLogout} />);

    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  it('should not render login/logout button when pathname starts with /auth', () => {
    (usePathname as jest.Mock).mockReturnValue('/auth/login');
    render(<Header user={null} logout={mockLogout} />);

    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('should call logout and navigates to login when logout button is clicked', () => {
    const user = { email: 'test@example.com' };
    render(<Header user={user} logout={mockLogout} />);

    fireEvent.click(screen.getByText('Logout'));

    expect(mockLogout).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith(ROUTES.LOGIN);
  });

  it('should navigate to login when login button is clicked', () => {
    render(<Header user={null} logout={mockLogout} />);

    fireEvent.click(screen.getByText('Login'));

    expect(mockPush).toHaveBeenCalledWith(ROUTES.LOGIN);
    expect(mockLogout).not.toHaveBeenCalled();
  });
});
