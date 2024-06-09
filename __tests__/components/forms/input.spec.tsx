import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput } from '@/components/forms/input';

describe('<FormInput />', () => {
  it("should render input's label", () => {
    render(<FormInput label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render error message', () => {
    render(<FormInput error="Invalid input" />);

    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });

  it('should correctly pass event handler', () => {
    const handleChange = jest.fn();
    render(<FormInput onInput={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, 'test');

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
