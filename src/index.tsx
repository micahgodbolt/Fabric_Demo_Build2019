import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "@uifabric/icons";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import {
  Pivot,
  PivotItem,
  Customizer,
  Toggle,
  Stack
} from "office-ui-fabric-react";
import { Example1 } from "./Examples";

initializeIcons();

function App() {
  const [fluent, setFluent] = React.useState(false);
  const pivotStyles = {
    root: {
      marginBottom: 20
    }
  };

  const theme = fluent ? FluentCustomizations : {};

  return (
    <Stack horizontal>
      <Stack.Item grow>
        <Pivot styles={pivotStyles}>
          <PivotItem headerText="Demo 1">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 2">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 3">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 4">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 5">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 6">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 7">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Demo 8">
            <Customizer {...theme}>
              <Example1 />
            </Customizer>
          </PivotItem>
        </Pivot>
      </Stack.Item>
      <Toggle label="Fluent" onChange={() => setFluent(!fluent)} />
    </Stack>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
