import * as React from "react";
import { Button, IButtonTokens } from "@uifabric/experiments";
import { Card, ICardStyles, ICardTokens } from "@uifabric/react-cards";
import {
  Image,
  Stack,
  IStackProps,
  IStackTokens,
  Text,
  ITextStyles
} from "office-ui-fabric-react";

export const WeatherReportCard = props => {
  const cardStyle: ICardStyles = {
    root: {
      backgroundImage:
        "url('http://messagecardplayground.azurewebsites.net/assets/Mostly%20Cloudy-Background-Dark.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "1px solid #D3D3D3"
    }
  };

  const textStyle: ITextStyles = {
    root: {
      color: "rgba(51, 51, 51, 0.933)",
      fontWeight: 600
    }
  };

  const dateStyle: ITextStyles = {
    root: {
      color: "white",
      fontWeight: 600
    }
  };

  const cardTokens: ICardTokens = {
    boxShadow: "none",
    childrenGap: 8,
    maxWidth: "440px"
  };

  const stackTokens: IStackTokens = {
    childrenGap: 8
  };

  const buttonTokens: IButtonTokens = {
    backgroundColor: "transparent",
    backgroundColorHovered: "rgba(0, 0, 0, 0.15)",
    backgroundColorPressed: "rgba(0, 0, 0, 0.15)",
    cursor: "default"
  };

  const buttonStackProps: IStackProps = {
    horizontal: false,
    tokens: {
      childrenGap: 8
    }
  };

  return (
    <Card styles={cardStyle} tokens={cardTokens}>
      <Stack horizontal tokens={stackTokens}>
        <Image
          src="http://messagecardplayground.azurewebsites.net/assets/Mostly%20Cloudy-Square.png"
          height={120}
          width={135}
        />
        <Stack>
          <Text variant="xLarge" styles={dateStyle}>
            Monday April 1
          </Text>
          <Text variant="large" styles={textStyle}>
            63 / 42
          </Text>
          <Text styles={textStyle}>20% chance of rain</Text>
          <Text styles={textStyle}>Winds 5 mph NE</Text>
        </Stack>
      </Stack>
      <Stack horizontal horizontalAlign="center" tokens={stackTokens}>
        <Button stack={buttonStackProps} tokens={buttonTokens}>
          <Text styles={textStyle}>Fri</Text>
          <Image
            src="http://messagecardplayground.azurewebsites.net/assets/Mostly%20Cloudy-Square.png"
            height={82}
            width={92.5}
          />
          <Stack>
            <Text styles={textStyle}>62</Text>
            <Text styles={textStyle}>52</Text>
          </Stack>
        </Button>
        <Button stack={buttonStackProps} tokens={buttonTokens}>
          <Text styles={textStyle}>Sat</Text>
          <Image
            src="http://messagecardplayground.azurewebsites.net/assets/Drizzle-Square.png"
            height={82}
            width={92.5}
          />
          <Stack>
            <Text styles={textStyle}>60</Text>
            <Text styles={textStyle}>48</Text>
          </Stack>
        </Button>
        <Button stack={buttonStackProps} tokens={buttonTokens}>
          <Text styles={textStyle}>Sun</Text>
          <Image
            src="http://messagecardplayground.azurewebsites.net/assets/Mostly%20Cloudy-Square.png"
            height={82}
            width={92.5}
          />
          <Stack>
            <Text styles={textStyle}>59</Text>
            <Text styles={textStyle}>49</Text>
          </Stack>
        </Button>
        <Button stack={buttonStackProps} tokens={buttonTokens}>
          <Text styles={textStyle}>Mon</Text>
          <Image
            src="http://messagecardplayground.azurewebsites.net/assets/Mostly%20Cloudy-Square.png"
            height={82}
            width={92.5}
          />
          <Stack>
            <Text styles={textStyle}>64</Text>
            <Text styles={textStyle}>51</Text>
          </Stack>
        </Button>
      </Stack>
    </Card>
  );
};
