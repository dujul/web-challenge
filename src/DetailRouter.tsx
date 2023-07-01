import TropicalRainForest from "./TropicalRainForest";

type DetailRouterProps = {
    id: string,
    onExit: () => void
}

export default function DetailRouter(props: DetailRouterProps) {
    if (props.id === "tropical_rainforest") {
        return <TropicalRainForest onExit={() => props.onExit()}/>
    }
    return <div>
        <div>Category {props.id} not supported yet!</div>
        <button onClick={props.onExit}>Back to Map</button>
    </div>
}