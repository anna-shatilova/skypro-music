import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const setUser = () => {
    localStorage.setItem('user', 'token')
    navigate('/', { replace: true })
  }
  return (
    <>
      <h1>Страница логина</h1>
      <div className="modal__btn-enter">
        <Link
          to="/"
          onClick={setUser}
        >
          Войти
        </Link>
      </div>
      <div className="modal__btn-signup">
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </>
  )
}
