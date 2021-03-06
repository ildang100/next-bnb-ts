import { useDispatch } from 'react-redux'
import { useSelector } from '../../../store'
import { commonActions } from '../../../store/common'

const useValidateMode = () => {
  const dispatch = useDispatch()
  const validateMode = useSelector((state) => state.common.validateMode)

  const setValidateMode = (value: boolean = true) => {
    return dispatch(commonActions.setValidateMode(value))
  }

  return { validateMode, setValidateMode }
}

export default useValidateMode
