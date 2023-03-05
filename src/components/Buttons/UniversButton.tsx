

type UniversButtonType = {
    name: string
}
export const UniversButton = (props: UniversButtonType) => {
    return (
        <button>{props.name}</button>
    )
}