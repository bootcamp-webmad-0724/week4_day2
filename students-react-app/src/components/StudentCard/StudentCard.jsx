import './StudentCard.css'

const StudentCard = (props) => {

    const { studentInfo, courseInfo, highlighted } = props

    const { fullName, age, image } = studentInfo
    const { bootcamp, campus, year, format } = courseInfo

    const studentStyle = {
        backgroundColor: highlighted ? 'green' : 'white',
        fontWeight: highlighted ? 'bold' : 'thin',
        color: year === 2024 ? 'red' : 'black'
    }

    return (
        <article className="StudentCard" style={studentStyle}>
            <img src={image} alt={fullName} />
            <hr />
            <p>{fullName} ({age} años)</p>
            <p>{highlighted ? 'DESTACADO!' : 'NO DESTACADO'}</p>
            <p>{bootcamp} | {campus}, {year} | {format}</p>
        </article>
    )
}

export default StudentCard