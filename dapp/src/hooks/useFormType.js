import { useState } from 'react'

const useFormType = () => {
	const [isEditForm, setIsEditForm] = useState(true)
	const [data, setData] = useState({})

	return [isEditForm, setIsEditForm, data, setData]
}

export default useFormType
