import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './LoginAndRegister.styles'
import { getToken, loginUser } from '../../api/apiUser'
import { useUserContext } from '../../context/UserProvider'

export const Login = () => {
  const [loginError, setLoginError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useUserContext()

  const handleLogin = async () => {
    try {
      if (!email) {
        setLoginError('Введите email')
        return
      }

      if (!password) {
        setLoginError('Введите пароль')
      }

      await loginUser({ email, password }).then((loginData) => {
        getToken({ email, password }).then((tokenData) => {
          login(loginData, tokenData.access)
        })
      })
    } catch (error) {
      setLoginError(error.message)
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setLoginError(null)
  }, [email, password])

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
        </S.Inputs>
        {loginError && <S.Error>{loginError}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleLogin}>Войти</S.PrimaryButton>
          <Link to="/register">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
