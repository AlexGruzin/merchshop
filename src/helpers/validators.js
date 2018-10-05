export const required = value => value || 'Required';

export const maxLength = maxNumberOfCharacters => value => (
    value && value.length > maxNumberOfCharacters ? `Cannot be longer than ${maxNumberOfCharacters} symbols.` : undefined
);

export const signUpCode = value => (
    value && !/[\w]{40}$/.test(value) ? 'Invalid sign up code.' : undefined
);

export const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email.' : undefined
);
