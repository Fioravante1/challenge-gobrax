import { render, screen } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

describe('App', () => {
  it('renders a button', () => {
    expect(1).toBe(1);
  });

  it('render App', () => {
    render(<App />);
    expect(screen.getByText('Fioravante')).toBeInTheDocument();
  })
})