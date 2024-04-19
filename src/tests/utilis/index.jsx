import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function customRender(jsx) {
  return {
    user: userEvent.setup(),
    screen,
    fireEvent,
    waitFor,
    ...render(jsx),
  }
}