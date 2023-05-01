import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(outsideText) {
        let text = 'I am the Emoji Component';
        
        if (outsideText) text = outsideText;
        // console.log(outsideText, text);

        return <div>{text}</div>
    }
}