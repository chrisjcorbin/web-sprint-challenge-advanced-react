import React from "react";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";

// Write up the two tests here and make sure they are testing what the title shows

// Test #1
test("form header renders", async() => {
const { getByText } = render(<CheckoutForm />);

const header = getByText(/checkout form/i);

expect(header).toBeInTheDocument();
});

// Test #2
test("form shows success message on submit with form details", async() => {

const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />);

const firstNameInput = getByLabelText(/first name/i);
await userEvent.type(firstNameInput, 'Chris');
expect(firstNameInput).toHaveValue('Chris');

const lastNameInput = getByLabelText(/last name/i);
await userEvent.type(lastNameInput, 'Corbin');
expect(lastNameInput).toHaveValue('Corbin');

const addressInput = getByLabelText(/address/i);
await userEvent.type(addressInput, '4321 Wrongway Drive');
expect(addressInput).toHaveValue('4321 Wrongway Drive');

const cityInput = getByLabelText(/city/i);
await userEvent.type(cityInput, 'Seattle');
expect(cityInput).toHaveValue('Seattle');

const stateInput = getByLabelText(/state/i);
await userEvent.type(stateInput, 'WA');
expect(stateInput).toHaveValue('WA');

const zipInput = getByLabelText(/zip/i);
await userEvent.type(zipInput, '98101');
expect(zipInput).toHaveValue('98101');

const checkoutBtn = getByRole("button", { name: /checkout/i });
userEvent.click(checkoutBtn);
expect(getByTestId("successMessage"));
});

// Test #3 - Stretch
const newPlants = [
    {
        id: 1,
        name: 'Coconut Fern',
        price: 19,
    },
    {
        id: 2,
        name: 'Springy Plant',
        price: 12,
    },
    {
        id: 3,
        name: 'Rebecca Iris',
        price: 25,
    }];

test("Shopping cart shows selected plants", async () => {
    const { getByTestId } = render(<ShoppingCart cart={newPlants} />);

    const plantTest = getByTestId('plant-name');
    expect(plantTest).toBeInTheDocument();
});