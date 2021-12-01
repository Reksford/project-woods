import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders fishing title', () => {
  render(<App />);
  const linkElement = screen.getByText(/rogue gone fishing/i);
  expect(linkElement).toBeInTheDocument();
});
