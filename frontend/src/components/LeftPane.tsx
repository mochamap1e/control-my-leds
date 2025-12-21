import eden from "../clients/eden"

export default function LeftPane() {
    async function getState() {
        const response = await eden.state.get
    }

    return (
        <div>
            <h1>LeftPane</h1>
            <button onClick={getState}>State</button>
        </div>
    )
}