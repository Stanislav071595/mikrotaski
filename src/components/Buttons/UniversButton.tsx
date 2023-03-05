

type UniversButtonType = {
    name: string
    callBack:()=>void
}
export const UniversButton = (props: UniversButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}