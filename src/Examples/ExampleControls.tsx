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
  Customizer,
  Breadcrumb,
  CompoundButton,
  SpinButton
} from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";

export const ExampleControls = () => {
  const [isFluent, setFluent] = React.useState(false);
  const theme = isFluent ? FluentCustomizations : {};
  return (
    <Customizer {...theme}>
      <Stack styles={{ root: { maxWidth: 800 } }} horizontal gap={60}>
        <Stack gap={20} maxWidth={250} grow>
          <TextField prefix="http://" label="Standard" />
          <TextField label="Disabled" disabled={true} />
          <TextField label="With error message" errorMessage="Error message" />
          <SpinButton
            defaultValue="0"
            label={"Basic SpinButton:"}
            min={0}
            max={100}
            step={1}
            iconProps={{ iconName: "IncreaseIndentLegacy" }}
            incrementButtonAriaLabel={"Increase value by 1"}
            decrementButtonAriaLabel={"Decrease value by 1"}
          />
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
              },
              {
                key: "C",
                text: "Option C",
                disabled: true
              }
            ]}
            label="Pick one"
            required={true}
          />

          <Checkbox label="Standard checkbox" />
          <Checkbox disabled label="Standard checkbox" />
        </Stack>
        <Stack gap={20}>
          <DefaultButton>Hello World</DefaultButton>
          <PrimaryButton>Hello World</PrimaryButton>
          <CompoundButton secondaryText="You can create a new account here.">
            Create account
          </CompoundButton>
          <CompoundButton
            primary
            secondaryText="You can create a new account here."
          >
            Create account
          </CompoundButton>
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
        </Stack>
      </Stack>
      <Stack>
        <Breadcrumb
          items={[
            { text: "Files", key: "Files", onClick: () => null },
            { text: "This is folder 1", key: "f1", onClick: () => null },
            { text: "This is folder 2", key: "f2", onClick: () => null },
            { text: "This is folder 3", key: "f3", onClick: () => null },
            { text: "This is folder 4", key: "f4", onClick: () => null },
            {
              text: "This is folder 5",
              key: "f5",
              onClick: () => null,
              isCurrentItem: true
            }
          ]}
          maxDisplayedItems={5}
          ariaLabel={"Breadcrumb with static width"}
          overflowAriaLabel={"More items"}
        />
      </Stack>
      <Toggle
        styles={{ root: { position: "absolute", bottom: 30, right: 20 } }}
        label="Fluent"
        onChange={() => setFluent(!isFluent)}
      />
    </Customizer>
  );
};
