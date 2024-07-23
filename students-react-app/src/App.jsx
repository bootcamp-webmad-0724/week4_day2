import './App.css'
import Button from './components/Button/Button'
import ChildrenExample from './components/ChildrenExample/ChildrenExample'
import Navigation from './components/Navigation/Navigation'
import StudentCard from './components/StudentCard/StudentCard'
import Title from './components/Title/Title'

const App = () => {

  return (
    <div className="App">

      <Navigation />

      <hr />

      <Title titleText={'Acciones especiales'} />

      <Button buttonText={'Ver todos los alumnos'} />
      <Button buttonText={'Ver todos los cursos'} />
      <Button buttonText={'Ver todos los centros'} />

      <Title titleText={'Listado de alumnos'} />

      <StudentCard
        studentInfo={{ fullName: 'Jason Whatever', age: 33, image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1600.jpg' }}
        courseInfo={{ bootcamp: 'Web Dev', campus: 'Remoto', year: 2024, format: 'PT' }}
        highlighted={true}
      />

      <StudentCard
        studentInfo={{ fullName: 'Maria Relol', age: 34, image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1909.jpg' }}
        courseInfo={{ bootcamp: 'Web Dev', campus: 'Madrid', year: 2025, format: 'FT' }}
        highlighted={false}
      />

      <StudentCard
        studentInfo={{ fullName: 'Chechu Doe', age: 31, image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1984.jpg' }}
        courseInfo={{ bootcamp: 'Data', campus: 'BCN', year: 2024, format: 'FT' }}
        highlighted={false}
      />

      <StudentCard
        studentInfo={{ fullName: 'Rihanna Yikes', age: 77, image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2117.jpg' }}
        courseInfo={{ bootcamp: 'UX/UI', campus: 'Madrid', year: 2024, format: 'FT' }}
        highlighted={true}
      />

      <hr />

      <ChildrenExample>

        {/* 
        CUANDO ENTRE AL APERTURA Y EL CIERRE DE UN COMPONENTE SE ENVÍA CÓDIGO
        ESTE ES RECIBIDO EN EL COMPONENTE COMO LA PROP POR DEFECTO children 
        */}

        <p>Yo soy un hijo</p>
        <p>Yo soy otro hijo</p>
        <p>Somos los children de este componente :3</p>

      </ChildrenExample>

    </div>
  )
}

export default App