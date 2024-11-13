import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count');
  expect(countValue.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countValue = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countValue = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe('-1');
});
