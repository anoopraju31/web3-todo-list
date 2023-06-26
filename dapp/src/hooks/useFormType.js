import { useState } from 'react'

const useFormType = () => {
	const [isEditForm, setIsEditForm] = useState(false)

	return [isEditForm, setIsEditForm]
}

export default useFormType
