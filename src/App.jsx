
function App() {

  const Header = () => {
    const text = 'salom o`quvchila'
    return <h1>{text}</h1>
  }

  const Field = () => {
    const inputType = 'text'
    const placeholder = 'Typing..'
    return <input type={inputType} placeholder={placeholder}/>
  }

  // if(true) {
  //   'logout'
  // } else {
  //   'login'
  // }

  const Button = () => {
    const login = false
    return <button>{login ? 'Logout' : 'Login'}</button>
  }
  
  return (
    <div>
      <Header />
      <Field />
      <Button/>
    </div>
  )
}

export default App
