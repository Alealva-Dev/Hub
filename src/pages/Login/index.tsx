import React, { useState, useEffect } from 'react'
import { LoginMP  } from '55tec_frontend_lib/dist'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// TYPES
import { ApplicationState } from '../../store'

// ACTIONS
import { login } from '../../store/reducers/auth/actions'
import { stopLoading } from '../../store/reducers/global/actions'

const Login: React.FC = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const { application, isLogged } = useSelector((state: ApplicationState) => state.authState)
  const { isLoading } = useSelector((state: ApplicationState) => state.globalState)

  useEffect(() => {
    doLogin()
  }, [isLogged])

  const onLoginSuccess = (e: any) => {
    console.log(e)
    dispatch(login(e))

    history.push('/main')
  }

  const doLogin = () => {
    if(!isLogged) {
      return dispatch(stopLoading())
    }

    history.push('/main')
  }

  return <LoginMP initialApp={application} onSuccess={(e) => onLoginSuccess(e)} />;
}

export default Login;
