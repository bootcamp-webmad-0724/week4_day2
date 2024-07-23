import './Button.css'

const Button = (props) => {

    console.log('ESTAS SON LAS PROPS DE ESTE BOITON ->', props)

    const { buttonText } = props

    return (
        <button className="Button">
            {buttonText}
        </button>
    )
}

export default Button