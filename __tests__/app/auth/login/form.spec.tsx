import { render, screen, fireEvent } from '@testing-library/react';
import { mockInput } from '@tests/mocks/components';

import { LoginForm } from '@/app/auth/login/components/form';

jest.mock('@/components/forms/input', () => ({
  FormInput: mockInput,
}));

describe('LoginForm component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form inputs and submit button', () => {
    render(
      <LoginForm
        register={mockRegister}
        errors={mockErrors}
        isDirty={false}
        isValid={true}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
      />,
    );

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('disables submit button when form is not dirty or invalid', () => {
    render(
      <LoginForm
        register={mockRegister}
        errors={mockErrors}
        isDirty={false}
        isValid={false}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
      />,
    );

    expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
  });

  test('enables submit button when form is dirty and valid', () => {
    render(
      <LoginForm
        register={mockRegister}
        errors={mockErrors}
        isDirty={true}
        isValid={true}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
      />,
    );

    expect(screen.getByRole('button', { name: 'Login' })).toBeEnabled();
  });

  test('disables submit button when form is submitting', () => {
    render(
      <LoginForm
        register={mockRegister}
        errors={mockErrors}
        isDirty={true}
        isValid={true}
        isSubmitting={true}
        onSubmit={mockOnSubmit}
      />,
    );

    expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
  });

  test('calls onSubmit when form is submitted', () => {
    render(
      <LoginForm
        register={mockRegister}
        errors={mockErrors}
        isDirty={true}
        isValid={true}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
      />,
    );

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
