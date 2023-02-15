



export default function Image(props:any){

    const {
        url,
        alt="an image"
    } = props

    return (
        <>
            <img
                style={{margin:"0 auto"}}
                className={"py-5"} src={url} alt={alt}/>
        </>
    )
}