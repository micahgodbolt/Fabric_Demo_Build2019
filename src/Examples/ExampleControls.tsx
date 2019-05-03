import * as React from "react";
import {
  TextField,
  ChoiceGroup,
  DefaultButton,
  PrimaryButton,
  ContextualMenuItemType,
  Checkbox,
  Toggle,
  Stack,
  Customizer
} from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";

export const ExampleControls = () => {
  const [isFluent, setFluent] = React.useState(false);
  const theme = isFluent ? FluentCustomizations : {};
  return (
    <Customizer {...theme}>
      <Stack styles={{ root: { maxWidth: 800 } }} horizontal gap={60}>
        <Stack grow>
          <TextField suffix="suffix" label="Standard" />
          <TextField label="Disabled" disabled={true} />
          <TextField label="Required " required={true} />
          <TextField label="With error message" errorMessage="Error message" />
        </Stack>
        <Stack grow gap={20}>
          <Toggle
            defaultChecked={true}
            label="Toggle"
            onText="On"
            offText="Off"
          />
          <ChoiceGroup
            options={[
              {
                key: "A",
                text: "Option A"
              },
              {
                key: "B",
                text: "Option B",
                checked: true
              }
            ]}
            label="Pick one"
            required={true}
          />
          <ChoiceGroup
            options={[
              {
                key: "C",
                text: "Option C",
                disabled: true
              },
              {
                key: "D",
                text: "Option D",
                checked: true,
                disabled: true
              }
            ]}
            label="Pick one"
            required={true}
          />
        </Stack>
        <Stack gap={20}>
          <DefaultButton>Hello World</DefaultButton>
          <PrimaryButton>Hello World</PrimaryButton>
          <DefaultButton
            id="ContextualMenuBasicExample"
            text="Click for ContextualMenu"
            menuProps={{
              shouldFocusOnMount: true,
              items: [
                {
                  key: "newItem",
                  text: "New",
                  onClick: () => console.log("New clicked")
                },
                {
                  key: "divider_1",
                  itemType: ContextualMenuItemType.Divider
                },
                {
                  key: "rename",
                  text: "Rename",
                  onClick: () => console.log("Rename clicked")
                },
                {
                  key: "disabled",
                  text: "Disabled item",
                  disabled: true,
                  onClick: () =>
                    console.error("Disabled item should not be clickable.")
                }
              ]
            }}
          />
          <Checkbox label="Standard checkbox" />
          <Checkbox disabled label="Standard checkbox" />
        </Stack>
      </Stack>
      <Toggle
        styles={{ root: { position: "absolute", top: 30, right: 20 } }}
        label="Fluent"
        onChange={() => setFluent(!isFluent)}
      />
    </Customizer>
  );
};
