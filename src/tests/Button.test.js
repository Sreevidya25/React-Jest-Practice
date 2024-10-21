import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from './Button';
import axios from 'axios';

// test('render button with correct label', () => {
//     // const { getByText, getByTestId } = render(<Button label="My Button" />); 
//     // const buttonElement = getByText('My Button');
//     // const countElement = getByTestId('count')

//     // expect(buttonElement).toBeInTheDocument();
//     // expect(countElement.textContent).toBe('Count: 0');
//     // fireEvent.click(buttonElement);
//     // expect(countElement.textContent).toBe('Count: 1');

//     const {getByTestId} = render(<Button label="MyButton" disabled={true}/>)
//     const buttonElement = getByTestId('button');
//     expect(buttonElement).toBeDisabled();

// })

jest.mock('axios');

test('fetches data when button is clicked', async() => {
    axios.get.mockResolvedValue({data: 'Mocked data'});
    const {getByText, getByTestId} = render(<Button label='My Button'/>);
    const buttonElement = getByText('My Button');
    const dataElement = getByTestId('data');

    fireEvent.click(buttonElement);
    await waitFor(() => {
        expect(dataElement.textContent).toBe('Data: Mocked Data');
    })
})