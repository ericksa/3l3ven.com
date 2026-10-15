import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders hero with Get a Quote button', () => {
  render(<Home />);
  const button = screen.getByRole('link', { name: /Get a Quote/i });
  expect(button).toBeInTheDocument();
});
