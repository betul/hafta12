import { useEffect } from "react"
function C2() {
    useEffect(() => {document.title = "c2 mount oldu"}, [])

    return (
        <p> C2</p>
    )
}

export default C2