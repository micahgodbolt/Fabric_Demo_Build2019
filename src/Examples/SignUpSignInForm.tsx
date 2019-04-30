import * as React from "react";
import {
  PrimaryButton,
  Stack,
  IStackStyles,
  IStackTokens,
  Text,
  TextField,
  ITextFieldStyles
} from "office-ui-fabric-react";

export const SignUpSignInForm = props => {
  const outerStackStyles: IStackStyles = {
    root: {
      width: 500
    }
  };
  const horizontalTextFieldStyles: ITextFieldStyles = {
    root: {
      width: "50%"
    },
    fieldGroup: {},
    prefix: {},
    suffix: {},
    field: {},
    icon: {},
    description: {},
    wrapper: {},
    errorMessage: {},
    subComponentStyles: {
      label: {}
    }
  };

  const outerStackTokens: IStackTokens = { childrenGap: 30 };
  const sectionStackTokens: IStackTokens = { childrenGap: 10 };
  const horizontalStackTokens: IStackTokens = { childrenGap: 10 };

  return (
    <Stack wrap styles={outerStackStyles} tokens={outerStackTokens}>
      <Stack tokens={sectionStackTokens}>
        <Text variant="xLarge">Sign In</Text>
        <Stack horizontal tokens={horizontalStackTokens}>
          <TextField
            label="Email or username"
            styles={horizontalTextFieldStyles}
          />
          <TextField label="Password" styles={horizontalTextFieldStyles} />
        </Stack>
        <PrimaryButton text="Sign In" />
      </Stack>
      <Stack tokens={sectionStackTokens}>
        <Text variant="xLarge">Sign Up</Text>
        <Stack horizontal tokens={horizontalStackTokens}>
          <TextField label="First name" styles={horizontalTextFieldStyles} />
          <TextField label="Last name" styles={horizontalTextFieldStyles} />
        </Stack>
        <TextField label="Email" />
        <TextField label="Username" />
        <TextField label="Password" />
        <TextField label="Confirm password" />
        <PrimaryButton text="Sign Up" />
      </Stack>
    </Stack>
  );
};
