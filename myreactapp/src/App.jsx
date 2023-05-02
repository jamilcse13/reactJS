import "./App.css";
// inheritance
// import Emoji from "./components/inheritance/Emoji";
// import Text from "./components/inheritance/Text";

// composition
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";
import Text from "./components/composition/Text";


function App() {
  return (
    <div>

      {/* <Text/> */}

      <Emoji>
        {({addEmoji}) => (
            <Bracket>
              {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
            </Bracket>)}
      </Emoji>      
    </div>
  );
}

export default App;
