import { render, screen } from '@testing-library/react';
import About from './components/about';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/About me/i);
  expect(linkElement).toBeInTheDocument();
});
