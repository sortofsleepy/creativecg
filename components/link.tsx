

export default function Link(props){

    const {
        url,
        text = "Link"
    } = props

    return (
        <>
            <a href={url} target={"_blank"} rel={"noreferrer"}>{text}</a>
        </>
    )
}