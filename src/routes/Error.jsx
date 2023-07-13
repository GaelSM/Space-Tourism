import { useRouteError } from "react-router-dom";
import "./Error.css"

export default function Error(){

    const { status, statusText } = useRouteError()

    return (
        <main className="error">
            <h2> {status} </h2>
            <p> {statusText} </p>
        </main>
    )
}