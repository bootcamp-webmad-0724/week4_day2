const ChildrenExample = (props) => {

    // ESTA PROP POR DEFECTO children ESTÁ DISPONIBLE EN TODOS LOS COMPONENTES
    const { children } = props

    return (
        <div>
            <h1>Estos son los children del componente:</h1>
            {children}
        </div>
    )
}

export default ChildrenExample