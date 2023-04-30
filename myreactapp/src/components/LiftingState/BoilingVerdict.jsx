export default function BoilingVerdict({celcius = 0}) {
    if (celcius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}