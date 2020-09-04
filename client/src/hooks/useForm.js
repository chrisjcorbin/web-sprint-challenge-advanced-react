// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    const [formValues, setValues] = useState(initialValue);

    const handleChanges = e => {
        const { name, value } = e.target;
        setValues({
            ...formValues,
            [name]: value
        });
    };

    return [formValues, handleChanges]
}