import {useState} from 'react'

const useAlert = () => {
    const [ alert, setAlert ] = useState({ show: false, text: '', type: 'danger'})

    const showAlert = ({ text, type = 'danger' }) => setAlert ({ 
        show: true,
        text,
        type

    })

    
    const HideAlert = () => setAlert ({ 
        show: false,
        text: '',
        type: 'danger'

    })
  return {alert, showAlert, HideAlert}
}

export default useAlert