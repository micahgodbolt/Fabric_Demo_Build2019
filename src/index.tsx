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
import {
  ChatInterface,
  Example1,
  MiniThemeDesigner,
  SignUpSignInForm,
  WeatherReportCard
} from "./Examples";

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
          <PivotItem headerText="Sign Up/Sign In Form">
            <Customizer {...theme}>
              <SignUpSignInForm />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Weather Report Card">
            <Customizer {...theme}>
              <WeatherReportCard />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Mini Theme Designer">
            <Customizer {...theme}>
              <MiniThemeDesigner />
            </Customizer>
          </PivotItem>
          <PivotItem headerText="Chat Interface">
            <Customizer {...theme}>
              <ChatInterface />
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
