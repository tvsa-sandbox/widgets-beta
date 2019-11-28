import React from 'react';
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';
import Related1 from "../components/Related1/";
import Related2 from "../components/Related2/";

emitter.defineVariants("Prueba", ["A", "B"], [50, 50] );

class App extends React.Component {
  experimentRef = React.createRef();

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

export default App;
