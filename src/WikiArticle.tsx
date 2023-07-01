import {useEffect, useState} from "react";
import axios from "axios";

type WikiProps = {
    src: string
}

export default function WikiArticle(props: WikiProps) {
    const [html, setHtml] = useState("<div>loading</div>")
    useEffect(() => {
        // axios.get(props.src)
        //     .then(value => {
        //     setHtml(value.data)
        // })
    }, [props.src])

    return <div dangerouslySetInnerHTML={{__html: html}}></div>
}
