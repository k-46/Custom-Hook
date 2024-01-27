import React, { useState } from 'react'

const useStorage = (newValue) => {

    const [value, setValue] = useState()

    const handleValue = (e) => {
        setValue(e);
        localStorage.setItem('content', e);
        sessionStorage.setItem('content', e);
      }
    return [value, handleValue]
}

export default useStorage
