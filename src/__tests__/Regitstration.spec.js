import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Registration from '../Registration';
import 'mutationobserver-shim';

beforeEach(cleanup);
afterEach(cleanup);

describe('App', () => {
  test('Registration - Name Required', async () => {
    const { getByTestId, getByText } = render(<Registration />);
    expect(getByText(/Name/i)).toBeInTheDocument();
    await userEvent.type(getByTestId('name'), '  ');
    await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
  });

  test('Registration - Email Required', async () => {
    const { getByTestId, getByText } = render(<Registration />);
    expect(getByText(/Email/i)).toBeInTheDocument();
    await userEvent.type(getByTestId('email'), '  ');
    await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
  });

  test('Registration - Invalid Email', async () => {
    const { getByTestId, getByText } = render(<Registration />);
    await userEvent.type(getByTestId('email'), 'test');
    await waitFor(() => expect(getByText('Invalid Email')).toBeInTheDocument());
  });

  test('Registration - Password Required', async () => {
    const { getByText, getByTestId, getAllByText } = render(<Registration />);
    expect(getAllByText(/Password/i)).toHaveLength(2);
    await userEvent.type(getByTestId('password'), '  ');
    await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
  });

  test('Registration - Confirm Password Required', async () => {
    const { getByText, getByTestId } = render(<Registration />);
    expect(getByText(/Confirm Password/i)).toBeInTheDocument();
    await userEvent.type(getByTestId('confirm_password'), '  ');
    await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
  });

  test('Registration - Confirm Password Match', async () => {
    const { getByText, getByTestId } = render(<Registration />);
    await userEvent.type(getByTestId('confirm_password'), ' test ');
    await waitFor(() =>
      expect(getByText('Passwords must match')).toBeInTheDocument()
    );
  });
});
