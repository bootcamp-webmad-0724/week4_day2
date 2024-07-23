import './Title.css'

const Title = (props) => {

    const { titleText } = props

    return (
        <h1 className='Title'>{titleText}</h1>
    )
}

export default Title