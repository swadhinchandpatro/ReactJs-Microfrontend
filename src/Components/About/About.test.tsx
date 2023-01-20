import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import About from './About';

it('should render heading h2', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', {level: 2})
    expect(headingElement).toBeInTheDocument();
});