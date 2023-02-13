import { createContext, useState, useEffect } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);

    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    });

    return (
        <FormContext.Provider value={{step, setStep, fields, setFields}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;