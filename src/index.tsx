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
  Sandbox,
  MiniThemeDesigner,
  OneDriveUI,
  WeatherReportCard,
  ExampleControls
} from "./Examples";

initializeIcons();

function App() {
  const pivotStyles = {
    root: {
      marginBottom: 20
    }
  };

  return (
    <Stack horizontal>
      <Stack.Item grow>
        <Pivot styles={pivotStyles}>
          <PivotItem headerText="Example Controls">
            <ExampleControls />
          </PivotItem>
          <PivotItem headerText="OneDrive Demo">
            <OneDriveUI />
          </PivotItem>
          <PivotItem headerText="Mini Theme Designer">
            <MiniThemeDesigner />
          </PivotItem>
          <PivotItem headerText="Weather Report Card">
            <WeatherReportCard />
          </PivotItem>
          <PivotItem headerText="Chat Interface">
            <ChatInterface />
          </PivotItem>
          <PivotItem headerText="Sandbox">
            <Sandbox />
          </PivotItem>
        </Pivot>
      </Stack.Item>
    </Stack>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
