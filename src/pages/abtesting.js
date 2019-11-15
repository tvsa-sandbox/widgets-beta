import React from 'react';
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';
import Related1 from "../components/Related1/";
import Related2 from "../components/Related2/";

emitter.defineVariants("Prueba", ["A", "B"], [50, 50] );

class App extends React.Component {
  //experimentRef = React.createRef();

  //onButtonClick(e) {
    //this.experimentRef.current.win();
  //}

  render() {
    return (
      <div>
        <Experiment ref={this.experimentRef} name="Prueba">
          <Variant name="A">
            <Related1 />

          </Variant>
          <Variant name="B">
            <Related2 />
          </Variant>
        </Experiment>
      </div>
    );
  }
}

// Called when a 'win' is emitted, in this case by this.experimentRef.current.win()
//emitter.addWinListener(function(experimentName, variantName) {
//  console.log(
  //  `Variant ${variantName} of experiment ${experimentName} was clicked`
  //);
//});

export default App;
