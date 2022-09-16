import { useState } from "react"

const LoginForm = () => {

	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	return (
    <form className="form">
      <label className="form__field">
        <input
          className="form__input"
          type="text"
          name="login"
          placeholder="Логин"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </label>
      <label className="form__field">
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button className="form__submit" type="submit">
        Войти
      </button>
    </form>
  );
}

export default LoginForm