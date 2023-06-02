const Header = () => {
    const text = 'salom o`quvchila'

    const getText = (text) => {
      return <div>
        <h1>salom {text}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur dicta cum temporibus fuga rem ullam accusantium repellendus rerum maxime!</p>
      </div>
    }

    return <div>
      {getText('Samir')}
      {getText('Anvar')}
      {getText('Ilhom')}
    </div>
  }

export default Header