import { useEffect, useState } from 'react'

const useFormType = () => {
	const [isEditForm, setIsEditForm] = useState(true)
	const [data, setData] = useState({})

	const changeFormType = (val) => {
		setIsEditForm(val)
	}

	useEffect(() => {
		console.log(isEditForm)
		console.log(data)
	}, [data, isEditForm])

	return { isEditForm, setIsEditForm, changeFormType, data, setData }
}

export default useFormType
