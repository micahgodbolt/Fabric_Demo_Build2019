import * as React from "react";
import { Button, IButtonTokens } from "@uifabric/experiments";
import {
  IButtonStyles,
  CommandBar,
  ICommandBarItemProps,
  ICommandBarStyles,
  ContextualMenuItemType,
  IIconStyles,
  IconButton,
  Nav,
  INavStyles,
  INavLinkGroup,
  Stack,
  IStackStyles,
  IStackTokens,
  Text,
  ITextStyles,
  TextField,
  ITextFieldStyles
} from "office-ui-fabric-react";

export const OneDriveUI = props => {
  // Component styles
  const containerStackStyles: IStackStyles = {
    root: {
      border: "1px solid black",
      height: "800px"
    }
  };
  const outerCommandBarStyles: ICommandBarStyles = {
    root: {
      backgroundColor: "black",
      height: 50,
      padding: 0
    }
  };
  const commandBarWaffleButtonStyles: IButtonStyles = {
    root: {
      backgroundColor: "#0078d7",
      width: 50
    },
    rootHovered: {
      backgroundColor: "#104a7d"
    },
    rootPressed: {
      backgroundColor: "#104a7d"
    }
  };
  const commandBarIconButtonStyles: IButtonStyles = {
    root: {
      backgroundColor: "black",
      width: 50
    },
    rootHovered: {
      backgroundColor: "#104a7d"
    },
    rootPressed: {
      backgroundColor: "#104a7d"
    }
  };
  const commandBarIconButtonIconStyles: IIconStyles = {
    root: {
      color: "white"
    }
  };
  const navStackStyles: IStackStyles = {
    root: {
      borderRight: "1px solid #EAEAEA",
      height: "100%"
    }
  };
  const searchBarStackStyles: IStackStyles = {
    root: {
      borderBottom: "1px solid #EAEAEA",
      height: 40,
      margin: "0px 8px"
    }
  };
  const searchBarIconButtonStyles: IButtonStyles = {
    root: {
      marginRight: 6,
      padding: 0
    },
    icon: {
      margin: 0
    }
  };
  const searchBarTextFieldStyles: ITextFieldStyles = {
    root: {},
    fieldGroup: { border: "none" },
    prefix: {},
    suffix: {},
    field: {
      fontSize: 13.3333,
      padding: 0
    },
    icon: {},
    description: {},
    wrapper: {},
    errorMessage: {},
    subComponentStyles: {
      label: {}
    }
  };
  const navStyles: INavStyles = {
    root: {
      width: 150
    },
    linkText: {},
    link: {},
    compositeLink: {},
    chevronButton: {},
    chevronIcon: {},
    navItems: {},
    navItem: {},
    group: {},
    groupContent: {}
  };
  const innerCommandBarStyles: ICommandBarStyles = {
    root: {
      height: 40
    }
  };
  const oneHundredPercentHeight = {
    root: {
      height: "100%"
    }
  };

  // CommandBar related props
  const outerCommandBarItems: ICommandBarItemProps[] = [
    {
      key: "WaffleButton",
      iconOnly: true,
      iconProps: {
        iconName: "Waffle",
        styles: {
          root: {
            color: "white",
            fontSize: 20,
            fontWeight: 600
          }
        }
      },
      buttonStyles: commandBarWaffleButtonStyles
    },
    {
      key: "ZeroDrive",
      name: "ZeroDrive",
      buttonStyles: {
        root: {
          backgroundColor: "black",
          fontSize: 22,
          marginLeft: 20,
          padding: 0
        },
        rootHovered: {
          backgroundColor: "black"
        },
        rootPressed: {
          backgroundColor: "black"
        },
        label: {
          color: "white",
          margin: 0
        }
      }
    }
  ];

  const outerCommandBarFarItems: ICommandBarItemProps[] = [
    {
      key: "Messages",
      iconOnly: true,
      iconProps: {
        iconName: "SkypeMessage",
        styles: commandBarIconButtonIconStyles
      },
      buttonStyles: commandBarIconButtonStyles
    },
    {
      key: "Notifications",
      iconOnly: true,
      iconProps: {
        iconName: "Ringer",
        styles: commandBarIconButtonIconStyles
      },
      buttonStyles: commandBarIconButtonStyles
    },
    {
      key: "Settings",
      iconOnly: true,
      iconProps: {
        iconName: "Settings",
        styles: commandBarIconButtonIconStyles
      },
      buttonStyles: commandBarIconButtonStyles
    },
    {
      key: "Help",
      iconOnly: true,
      iconProps: {
        iconName: "Help",
        styles: commandBarIconButtonIconStyles
      },
      buttonStyles: commandBarIconButtonStyles
    },
    {
      key: "User",
      name: "Username",
      buttonStyles: {
        root: {
          backgroundColor: "black"
        },
        rootHovered: {
          backgroundColor: "#104a7d"
        },
        rootPressed: {
          backgroundColor: "#104a7d"
        },
        label: {
          color: "white"
        }
      }
    }
  ];

  const innerCommandBarItems: ICommandBarItemProps[] = [
    {
      key: "New",
      name: "New",
      iconProps: {
        iconName: "Add"
      },
      subMenuProps: {
        items: [
          {
            key: "Folder",
            name: "Folder",
            iconProps: {
              iconName: "FolderHorizontal"
            }
          },
          {
            key: "Divider1",
            itemType: ContextualMenuItemType.Divider
          },
          {
            key: "WordDocument",
            name: "Word document",
            iconProps: {
              iconName: "WordDocument"
            }
          },
          {
            key: "ExcelWorkbook",
            name: "Excel workbook",
            iconProps: {
              iconName: "ExcelDocument"
            }
          },
          {
            key: "PowerPointPresentation",
            name: "PowerPoint presentation",
            iconProps: {
              iconName: "PowerPointDocument"
            }
          },
          {
            key: "OneNoteNotebook",
            name: "OneNote notebook",
            iconProps: {
              iconName: "OneNoteLogo"
            }
          },
          {
            key: "ExcelSurvey",
            name: "Excel survey",
            iconProps: {
              iconName: "ExcelDocument"
            }
          },
          {
            key: "PlainTextDocument",
            name: "Plain text document",
            iconProps: {
              iconName: "TextDocument"
            }
          }
        ]
      }
    },
    {
      key: "Upload",
      name: "Upload",
      iconProps: {
        iconName: "Upload"
      },
      subMenuProps: {
        items: [
          {
            key: "Files",
            name: "Files"
          },
          {
            key: "Folder",
            name: "Folder"
          }
        ]
      }
    }
  ];

  const innerCommandBarFarItems: ICommandBarItemProps[] = [
    {
      key: "Sort",
      name: "Sort",
      iconProps: {
        iconName: "SortLines"
      },
      subMenuProps: {
        items: [
          {
            key: "Name",
            name: "Name"
          },
          {
            key: "Modified",
            name: "Modified"
          },
          {
            key: "Size",
            name: "Size"
          },
          {
            key: "Divider1",
            itemType: ContextualMenuItemType.Divider
          },
          {
            key: "Ascending",
            name: "Ascending"
          },
          {
            key: "Descending",
            name: "Descending"
          },
          {
            key: "Divider2",
            itemType: ContextualMenuItemType.Divider
          },
          {
            key: "SaveSortOrder",
            name: "Save sort order"
          }
        ]
      }
    },
    {
      key: "ViewAll",
      iconOnly: true,
      iconProps: {
        iconName: "ViewAll"
      }
    },
    {
      key: "Info",
      iconOnly: true,
      iconProps: {
        iconName: "Info"
      }
    }
  ];

  // Nav related props
  const navGroups: INavLinkGroup[] = [
    {
      name: "ZeroDrive",
      links: [
        {
          name: "Files",
          url: ""
        },
        {
          name: "Recent",
          url: ""
        },
        {
          name: "Photos",
          url: ""
        },
        {
          name: "Shared",
          url: ""
        },
        {
          name: "Recycle bin",
          url: ""
        },
        {
          name: "PCs",
          url: ""
        }
      ]
    }
  ];

  return (
    <Stack styles={containerStackStyles}>
      <CommandBar
        items={outerCommandBarItems}
        farItems={outerCommandBarFarItems}
        styles={outerCommandBarStyles}
      />
      <Stack horizontal>
        <Stack.Item styles={oneHundredPercentHeight}>
          <Stack styles={navStackStyles}>
            <Stack
              horizontal
              verticalAlign="center"
              styles={searchBarStackStyles}
            >
              <IconButton
                iconProps={{ iconName: "Search" }}
                styles={searchBarIconButtonStyles}
              />
              <TextField
                placeholder="Search everything"
                styles={searchBarTextFieldStyles}
              />
            </Stack>
            <Nav groups={navGroups} styles={navStyles} />
          </Stack>
        </Stack.Item>
        <Stack.Item grow styles={oneHundredPercentHeight}>
          <Stack styles={oneHundredPercentHeight}>
            <CommandBar
              items={innerCommandBarItems}
              farItems={innerCommandBarFarItems}
              styles={innerCommandBarStyles}
            />
            <Stack
              padding="23px 0px 23px 32px"
              styles={{
                root: { height: "100%", overflowX: "hidden", overflowY: "auto" }
              }}
              tokens={{ childrenGap: 20 }}
            >
              <Text variant="xxLarge">Files</Text>
              <Stack horizontal wrap tokens={{ childrenGap: 8 }}>
                {getFolderButtons()}
              </Stack>
            </Stack>
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

const getFolderButtons = (): JSX.Element[] => {
  const buttonTokens: IButtonTokens = {
    backgroundColor: "transparent",
    iconSize: 100
  };
  const buttonStackTokens: IStackTokens = {
    childrenGap: 0
  };

  const dateTextStyles: ITextStyles = {
    root: {
      color: "#767676"
    }
  };

  let buttonArray: JSX.Element[] = [];
  for (let i = 1; i <= 50; i++) {
    const day = Math.ceil(Math.random() * 28);
    const month = Math.ceil(Math.random() * 12);
    const year = Math.ceil(Math.random() * 5) + 2013;

    const button: JSX.Element = (
      <div>
        <Button
          icon="FabricFolder"
          stack={{ horizontal: false, tokens: buttonStackTokens }}
          tokens={buttonTokens}
        >
          <Text>Folder {i}</Text>
          <Text variant="small" styles={dateTextStyles}>
            {month}/{day}/{year}
          </Text>
        </Button>
      </div>
    );
    buttonArray.push(button);
  }
  return buttonArray;
};
