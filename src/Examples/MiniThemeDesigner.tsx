import * as React from "react";
import { Card, ICardTokens } from "@uifabric/react-cards";
import {
  createTheme,
  getColorFromString,
  getTheme,
  isDark,
  themeRulesStandardCreator,
  ActionButton,
  BaseSlots,
  Callout,
  Checkbox,
  ColorPicker,
  IColor,
  DefaultButton,
  Dropdown,
  Icon,
  IIconStyles,
  Link,
  PrimaryButton,
  Stack,
  IStackStyles,
  IStackTokens,
  Text,
  ITextStyles,
  TextField,
  ITextFieldStyles,
  ITheme,
  IThemeRules,
  ThemeGenerator,
  ThemeProvider,
  Toggle
} from "office-ui-fabric-react";

export interface IMiniThemeDesignerState {
  primaryThemeColorPickerColor: IColor;
  primaryThemeColorPickerVisible: boolean;
  bodyTextColorPickerColor: IColor;
  bodyTextColorPickerVisible: boolean;
  bodyBackgroundColorPickerColor: IColor;
  bodyBackgroundColorPickerVisible: boolean;
  theme?: ITheme;
  themeRules?: IThemeRules;
}

export class MiniThemeDesigner extends React.Component<
  {},
  IMiniThemeDesignerState
> {
  private _primaryThemeColorPickerRef = React.createRef<HTMLDivElement>();
  private _bodyTextColorPickerRef = React.createRef<HTMLDivElement>();
  private _bodyBackgroundColorPickerRef = React.createRef<HTMLDivElement>();

  private _colorChangeTimeout: number;

  constructor(props: {}) {
    super(props);

    const themeRules = themeRulesStandardCreator();
    ThemeGenerator.insureSlots(
      themeRules,
      isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color!)
    );

    this.state = {
      primaryThemeColorPickerColor: getColorFromString("#FFA500"),
      primaryThemeColorPickerVisible: false,
      bodyTextColorPickerColor: getColorFromString("#0078D4"),
      bodyTextColorPickerVisible: false,
      bodyBackgroundColorPickerColor: getColorFromString("#323130"),
      bodyBackgroundColorPickerVisible: false,
      theme: getTheme(true),
      themeRules: themeRules
    };
  }

  public render() {
    // Get state
    const {
      primaryThemeColorPickerColor,
      primaryThemeColorPickerVisible,
      bodyTextColorPickerColor,
      bodyTextColorPickerVisible,
      bodyBackgroundColorPickerColor,
      bodyBackgroundColorPickerVisible,
      theme
    } = this.state;

    // Styles definition
    const colorSectionHeaderStyles: IStackStyles = {
      root: {
        fontSize: "21px"
      }
    };
    const boldTextStyles: IIconStyles | ITextStyles = {
      root: {
        fontWeight: 600
      }
    };
    const colorPickerBoxStyles: React.CSSProperties = {
      border: "1px solid black",
      height: 20,
      width: 20
    };
    const colorPickerTextFieldStyles: ITextFieldStyles = {
      root: {
        width: 100
      },
      fieldGroup: {
        height: 22
      },
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
    const samplesHeaderStyles: ITextFieldStyles = {
      root: {
        borderBottom: "1px solid black"
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

    // Token definition
    const outerStackTokens: ICardTokens = { childrenGap: 30 };
    const colorPickerCardTokens: ICardTokens = {
      minWidth: "auto",
      maxWidth: 500
    };
    const colorSectionHeaderTokens: IStackTokens = { childrenGap: 10 };
    const colorPickerIndividualStackTokens: IStackTokens = { childrenGap: 6 };
    const samplesCardTokens: ICardTokens = { maxWidth: 1200 };
    const samplesContainerStackTokens: IStackTokens = { childrenGap: 50 };
    const samplesSectionStackTokens: IStackTokens = { childrenGap: 10 };
    const samplesActionButtonsStackTokens: IStackTokens = { childrenGap: 5 };

    return (
      <Stack
        horizontal
        horizontalAlign="center"
        verticalAlign="start"
        tokens={outerStackTokens}
      >
        <Card tokens={colorPickerCardTokens}>
          <Stack
            horizontal
            verticalAlign="center"
            styles={colorSectionHeaderStyles}
            tokens={colorSectionHeaderTokens}
          >
            <Icon iconName="Color" styles={boldTextStyles} />
            <Text variant="xLarge" styles={boldTextStyles}>
              Color
            </Text>
          </Stack>

          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={colorSectionHeaderTokens}
            >
              <Text>Primary theme color</Text>

              <Stack horizontal tokens={colorPickerIndividualStackTokens}>
                <div
                  ref={this._primaryThemeColorPickerRef}
                  style={{
                    ...colorPickerBoxStyles,
                    backgroundColor: primaryThemeColorPickerColor.str
                  }}
                  onClick={this._updatePrimaryThemeColorPickerVisible}
                />

                <TextField
                  value={primaryThemeColorPickerColor.str}
                  styles={colorPickerTextFieldStyles}
                  onChange={this._onPrimaryThemeTextFieldChange}
                />
              </Stack>
            </Stack>
            {primaryThemeColorPickerVisible && (
              <Callout
                target={this._primaryThemeColorPickerRef.current}
                onDismiss={this._onCalloutDismiss}
              >
                <ColorPicker
                  color={primaryThemeColorPickerColor}
                  onChange={this._onPrimaryThemeColorPickerChange}
                />
              </Callout>
            )}
          </div>

          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={colorSectionHeaderTokens}
            >
              <Text>Body text color</Text>

              <Stack horizontal tokens={colorPickerIndividualStackTokens}>
                <div
                  ref={this._bodyTextColorPickerRef}
                  style={{
                    ...colorPickerBoxStyles,
                    backgroundColor: bodyTextColorPickerColor.str
                  }}
                  onClick={this._updateBodyTextColorPickerVisible}
                />
                <TextField
                  value={bodyTextColorPickerColor.str}
                  styles={colorPickerTextFieldStyles}
                  onChange={this._onBodyTextTextFieldChange}
                />
              </Stack>
            </Stack>
            {bodyTextColorPickerVisible && (
              <Callout
                target={this._bodyTextColorPickerRef.current}
                onDismiss={this._onCalloutDismiss}
              >
                <ColorPicker
                  color={bodyTextColorPickerColor}
                  onChange={this._onBodyTextColorPickerChange}
                />
              </Callout>
            )}
          </div>

          <div>
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={colorSectionHeaderTokens}
            >
              <Text>Body background color</Text>

              <Stack horizontal tokens={colorPickerIndividualStackTokens}>
                <div
                  ref={this._bodyBackgroundColorPickerRef}
                  style={{
                    ...colorPickerBoxStyles,
                    backgroundColor: bodyBackgroundColorPickerColor.str
                  }}
                  onClick={this._updateBodyBackgroundColorPickerVisible}
                />
                <TextField
                  value={bodyBackgroundColorPickerColor.str}
                  styles={colorPickerTextFieldStyles}
                  onChange={this._onBodyBackgroundTextFieldChange}
                />
              </Stack>
            </Stack>
            {bodyBackgroundColorPickerVisible && (
              <Callout
                target={this._bodyBackgroundColorPickerRef.current}
                onDismiss={this._onCalloutDismiss}
              >
                <ColorPicker
                  color={bodyBackgroundColorPickerColor}
                  onChange={this._onBodyBackgroundColorPickerChange}
                />
              </Callout>
            )}
          </div>
        </Card>

        <ThemeProvider theme={theme}>
          <Card tokens={samplesCardTokens}>
            <Text variant="xLarge" styles={boldTextStyles}>
              Samples
            </Text>

            <Stack horizontal tokens={samplesContainerStackTokens}>
              <Stack tokens={samplesSectionStackTokens}>
                <Text styles={samplesHeaderStyles}>TEXT</Text>
                <Text variant="tiny" styles={samplesHeaderStyles}>
                  MEMBER FEATURE STORY
                </Text>
                <Text variant="xLarge">The Mystery of Color</Text>
                <Stack>
                  <Text block variant="tiny">
                    Contrast is the difference in
                  </Text>
                  <Text block variant="tiny">
                    luminance or color that makes an
                  </Text>
                  <Text block variant="tiny">
                    object (or its representation in an
                  </Text>
                  <Text block variant="tiny">
                    image or display) distinguishable.
                  </Text>
                  <Text block variant="tiny">
                    In visual perception of the real
                  </Text>
                  <Text block variant="tiny">
                    world, contrast is determined.
                  </Text>
                </Stack>
              </Stack>

              <Stack tokens={samplesSectionStackTokens}>
                <Text styles={samplesHeaderStyles}>LINKS</Text>
                <Link href="http://dev.office.com/fabric/components/link">
                  Title hyperlink
                </Link>
                <Link
                  disabled
                  href="http://dev.office.com/fabric/components/link"
                >
                  Disabled hyperlink
                </Link>
                <Text styles={samplesHeaderStyles}>BUTTONS</Text>
                <Stack horizontal>
                  <PrimaryButton text="Primary" />
                  <DefaultButton text="Default" />
                </Stack>
                <Text styles={samplesHeaderStyles}>ACTION BUTTONS</Text>
                <Stack horizontal tokens={samplesActionButtonsStackTokens}>
                  <ActionButton
                    allowDisabledFocus
                    checked
                    iconProps={{ iconName: "Add" }}
                  >
                    Action text
                  </ActionButton>
                  <ActionButton
                    allowDisabledFocus
                    checked
                    iconProps={{ iconName: "ChevronLeft" }}
                  />
                  <ActionButton
                    allowDisabledFocus
                    checked
                    iconProps={{ iconName: "Cancel" }}
                  />
                </Stack>
              </Stack>

              <Stack tokens={samplesSectionStackTokens}>
                <Text styles={samplesHeaderStyles}>TEXT FIELD</Text>
                <TextField label="Label" />
                <TextField disabled label="Label" />
                <Text styles={samplesHeaderStyles}>TEXT FIELD - UNDERLINE</Text>
                <TextField underlined label="Label: " />
                <Text styles={samplesHeaderStyles}>DROPDOWN MENU</Text>
                <Dropdown
                  placeholder="Content"
                  label="Label"
                  ariaLabel="Content dropdown"
                  options={[
                    { key: "content", text: "Content" },
                    { key: "moreContent", text: "More content" }
                  ]}
                />
              </Stack>

              <Stack tokens={samplesSectionStackTokens}>
                <Text styles={samplesHeaderStyles}>TOGGLE</Text>
                <Toggle
                  defaultChecked={true}
                  label="Enabled and checked"
                  onText="On"
                  offText="Off"
                />
                <Text styles={samplesHeaderStyles}>CHECKBOX</Text>
                <Checkbox label="Standard checkbox" />
              </Stack>
            </Stack>
          </Card>
        </ThemeProvider>
      </Stack>
    );
  }

  private _onCalloutDismiss = () => {
    this.setState({
      primaryThemeColorPickerVisible: false,
      bodyTextColorPickerVisible: false,
      bodyBackgroundColorPickerVisible: false
    });
  };

  private _onPrimaryThemeColorPickerChange = (
    ev: React.SyntheticEvent<HTMLElement, Event>,
    color: IColor
  ) => {
    this.setState({ primaryThemeColorPickerColor: color });
    this._onColorChange(BaseSlots.primaryColor, color);
  };

  private _onPrimaryThemeTextFieldChange = (ev: any, value?: string) => {
    if (value) {
      const color = getColorFromString(value);
      if (color) {
        this.setState({ primaryThemeColorPickerColor: color });
        this._onColorChange(BaseSlots.primaryColor, color);
      }
    }
  };

  private _updatePrimaryThemeColorPickerVisible = () => {
    this.setState({ primaryThemeColorPickerVisible: true });
  };

  private _onBodyTextColorPickerChange = (
    ev: React.SyntheticEvent<HTMLElement, Event>,
    color: IColor
  ) => {
    this.setState({ bodyTextColorPickerColor: color });
    this._onColorChange(BaseSlots.foregroundColor, color);
  };

  private _onBodyTextTextFieldChange = (ev: any, value?: string) => {
    if (value) {
      const color = getColorFromString(value);
      if (color) {
        this.setState({ bodyTextColorPickerColor: color });
        this._onColorChange(BaseSlots.foregroundColor, color);
      }
    }
  };

  private _updateBodyTextColorPickerVisible = () => {
    this.setState({ bodyTextColorPickerVisible: true });
  };

  private _onBodyBackgroundColorPickerChange = (
    ev: React.SyntheticEvent<HTMLElement, Event>,
    color: IColor
  ) => {
    this.setState({ bodyBackgroundColorPickerColor: color });
    this._onColorChange(BaseSlots.backgroundColor, color);
  };

  private _onBodyBackgroundTextFieldChange = (ev: any, value?: string) => {
    if (value) {
      const color = getColorFromString(value);
      if (color) {
        this.setState({ bodyBackgroundColorPickerColor: color });
        this._onColorChange(BaseSlots.backgroundColor, color);
      }
    }
  };

  private _makeNewTheme = () => {
    const { themeRules } = this.state;

    if (themeRules) {
      const themeAsJson: {
        [key: string]: string;
      } = ThemeGenerator.getThemeAsJson(themeRules);
      const theme = createTheme({ ...{ palette: themeAsJson } });
      this.setState({ theme });
    }
  };

  private _onColorChange = (baseSlot: BaseSlots, color?: IColor) => {
    if (this._colorChangeTimeout) {
      clearTimeout(this._colorChangeTimeout);
    }

    this._colorChangeTimeout = setTimeout(() => {
      const themeRules = this.state.themeRules;
      if (themeRules) {
        const currentIsDark = isDark(
          themeRules[BaseSlots[BaseSlots.backgroundColor]].color!
        );
        ThemeGenerator.setSlot(
          themeRules[BaseSlots[baseSlot]],
          color,
          currentIsDark,
          true,
          true
        );
        if (
          currentIsDark !==
          isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color!)
        ) {
          ThemeGenerator.insureSlots(themeRules, currentIsDark);
        }
      }
      this.setState({ themeRules }, this._makeNewTheme);
    }, 20);
  };

  private _updateBodyBackgroundColorPickerVisible = () => {
    this.setState({ bodyBackgroundColorPickerVisible: true });
  };
}
