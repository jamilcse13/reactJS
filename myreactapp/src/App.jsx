import "./App.css";
import Calculator from "./components/LiftingState/Calculator";
// import Text from "./components/inheritence/Text";
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";
import Text from "./components/composition/Text";


function App() {
  // const quantities = [1,2,3];
  // return <ClockList quantities={quantities} locale="bn-BD" >Bangladesh</ClockList>;
  return (
    <div>
      {/* <Form/> */}
      {/* <Calculator /> */}
      {/* inheritance */}
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
