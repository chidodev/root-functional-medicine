import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders app component', () => {
    render(<App />);
    const headline = screen.getByText(/Login/i);
    expect(headline).toBeInTheDocument();
  });
});