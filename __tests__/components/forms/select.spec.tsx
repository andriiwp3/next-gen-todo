import { render, screen, fireEvent } from '@testing-library/react';
import { FormSelect } from '@/components/forms/select';

describe('<FormSelect />', () => {
  const options = [
    { id: 1, label: 'Option 1', value: 'option1' },
    { id: 2, label: 'Option 2', value: 'option2' },
    { id: 3, label: 'Option 3', value: 'option3' },
  ];

  it("should render select's label", () => {
    render(<FormSelect label="Answers" options={options} />);

    expect(screen.getByLabelText('Answers')).toBeInTheDocument();
  });

  it('should render error message', () => {
    render(<FormSelect error="Invalid select" options={options} />);

    expect(screen.getByText('Invalid select')).toBeInTheDocument();
  });

  it('should correctly pass event handler', () => {
    const handleChange = jest.fn();
    render(<FormSelect onChange={handleChange} options={options} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: options[2].value } });

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
