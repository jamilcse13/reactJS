import Clock from "./Clock";

export default function ClockList({quantities = []}) {
    return (
        // don't use the array index as a key
        <div>
            {quantities.map((key) => (
                <Clock key={key}>BS - </Clock>
            ))}
        </div>
    );
}