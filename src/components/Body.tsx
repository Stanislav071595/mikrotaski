
type BodyPropsType = {
    title: string
}


export const Body = (props: BodyPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )

}


