```tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AidenComponent from '../components/AidenComponent';

describe('AidenComponent', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<AidenComponent />);
    expect(getByTestId('aiden-component')).toBeInTheDocument();
  });

  it('displays user input', () => {
    const { getByTestId } = render(<AidenComponent />);
    const input = getByTestId('aiden-input');
    fireEvent.change(input, { target: { value: 'Hello Aiden' } });
    expect(input.value).toBe('Hello Aiden');
  });

  it('displays Aiden response', async () => {
    const { getByTestId } = render(<AidenComponent />);
    const input = getByTestId('aiden-input');
    const output = getByTestId('aiden-output');
    fireEvent.change(input, { target: { value: 'Hello Aiden' } });
    fireEvent.click(getByTestId('submit-button'));
    await new Promise((r) => setTimeout(r, 1000));
    expect(output).toHaveTextContent('Hello User');
  });
});
```