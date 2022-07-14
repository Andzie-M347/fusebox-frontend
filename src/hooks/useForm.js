import { useState, useEffect } from 'react'

export const useForm = () => {
    const [values, setValue] = useState({
        email: '',
        password: '',
    })

    const [errors, setError] = useState({})

    const onInputChange = e => {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value,
        })
    }

    return { onInputChange, values }
}
