import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import * as S from '../login/LoginAndRegister.styles'

import { registerUser, getToken } from '../../api/apiUser'
import { setAuth } from '../../store/authSlice'
// import { useUserContext } from '../../context/UserProvider'
// import { fetchAccessToken, fetchRefreshToken } from '../../store/playlistSlice'

export const Register = () => {
  const navigate = useNavigate()
  const [regError, setRegError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const dispatch = useDispatch()

  // const { login } = useUserContext()

  const handleRegister = async () => {
    try {
      if (!email) {
        setRegError('Введите email')
        return
      }

      if (!password) {
        setRegError('Введите пароль')
        return
      }

      if (!repeatPassword) {
        setRegError('Подтвердите пароль')
        return
      }

      if (password !== repeatPassword) {
        setRegError('Пароли не совпадают')
      }
      await registerUser({ email, password }).then((loginData) => {
        getToken({ email, password }).then((tokenData) => {
          // dispatch(fetchAccessToken(tokenData.access))
          // dispatch(fetchRefreshToken(tokenData.refresh))

          // login(loginData, tokenData.access)
          dispatch(
            setAuth({
              id: loginData.id,
              email: loginData.email,
              username: loginData.username,
              access: tokenData.access,
              refresh: tokenData.refresh,
              first_name: loginData.first_name,
              last_name: loginData.last_name,
            }),
          )
          navigate('/', { replace: true })
        })
      })
    } catch (error) {
      setRegError(error.message)
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setRegError(null)
  }, [email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage
              src="/img/logo_modal.png"
              alt="logo"
            />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {regError && <S.Error>{regError}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
