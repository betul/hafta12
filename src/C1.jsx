import { useEffect } from "react"
function C1() {
    useEffect(() => {
        document.title = "c1 mount oldu"
        return () => {
            document.title = "App";
        };
    }, [] )
        
    return (
        <p> C1</p>
    )
}

export default C1