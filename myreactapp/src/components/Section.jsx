import Content from "./Content"
import React from "react"

export default class Section extends React.Component {
    shouldComponentUpdate() {
        return false;
    }


    render() {
        return (
            <div>
                <h1>This is a Section</h1>
                <Content/>
            </div>
        )
    }
}
