type TypeCarsPropsType = {
    cars: Array<CarModels>
}


type CarModels = {
    manufacturer: string,
    model: string
}

export const CarTable = (props: TypeCarsPropsType) => {

    const CarsList = props.cars.map((l, i) => {
        return (
            <tr key={i}>
                <td>{l.manufacturer}</td>
                <td>{l.model}</td>
            </tr>

        )
    })

    return (
        <table>
            <thead>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>
            {CarsList}
            </tbody>
        </table>


    )
}




