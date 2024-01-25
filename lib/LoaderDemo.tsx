import { TextLoader } from "react-ui-loader";
import logo from "../public/ruilLogo.png";
import Image from "next/image";

const loaderDemo = [
  {
    name: "Default Loader",
    code: <TextLoader key="1" show={true} />,
    description:
      "Default Loader with plain text as 'loading...' on fullscreen black background  ",
    demoCode: `<TextLoader show={true} />`,
  },
  {
    name: "Custom Background Color Loader",
    code: <TextLoader key="2" show={true} bgColor="#76453B" />,
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader show={true} bgColor="#76453B" />`,
  },
  {
    name: "Custom Background Opacity Loader",
    code: (
      <TextLoader
        key="3"
        show={true}
        bgColor="#76453B"
        backgroundOpacity={0.5}
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: ` <TextLoader
    show={true}
    bgColor="#76453B"
    backgroundOpacity={0.5}
  />`,
  },
  {
    name: "Default Loader",
    code: <TextLoader key="4" show={true} loaderText="Custom Text" />,
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader show={true} loaderText="Custom Text" />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="5"
        show={true}
        loaderText="Custom Text"
        widthValue={"200px"}
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader show={true} loaderText="Custom Text" />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="6"
        show={true}
        loaderText="Custom Text"
        heightValue={"100px"}
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader show={true} loaderText="Custom Text" />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="7"
        show={true}
        loaderText="Custom Text"
        heightValue={"100px"}
        widthValue={"200px"}
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="8"
        show={true}
        loaderText="Custom Text"
        textColor="red"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="9"
        show={true}
        loaderText="Custom Text"
        fontSizeValue="64px"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="10"
        show={true}
        loaderText="Custom Text"
        fontSizeValue="64px"
        fontWeightValue={800}
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: <TextLoader key="11" show={true} textAnimate={true} />,
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="12"
        show={true}
        loaderText="Custom Text"
        loader={true}
        loaderStyle="CircularLoader"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="13"
        show={true}
        loaderText="Custom Text"
        loader={true}
        loaderStyle="DotLoader"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="14"
        show={true}
        loaderText="Custom Text"
        loader={true}
        loaderStyle="CircularLoader"
        loaderSize="small"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Default Loader",
    code: (
      <TextLoader
        key="15"
        show={true}
        loaderText="Custom Text"
        loader={true}
        loaderStyle="DotLoader"
        loaderColor="blue"
      />
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Logo Loader",
    code: (
      <TextLoader
        key="16"
        show={true}
        logo={true}
        textColor="#C5A967"
        fontWeightValue={800}
      >
        <Image src={logo} alt="logo" />
      </TextLoader>
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Logo Loader",
    code: (
      <TextLoader
        key="17"
        show={true}
        logo={true}
        textColor="#C5A967"
        fontWeightValue={800}
        logoHeight="200px"
        logoWidth="200px"
      >
        <Image src={logo} alt="logo" />
      </TextLoader>
    ),
    description: "loader cnkdcnkdk",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Animated Logo Loader",
    code: (
      <TextLoader
        key="18"
        show={true}
        logo={true}
        textColor="#C5A967"
        fontWeightValue={800}
        logoHeight="200px"
        logoWidth="200px"
        logoAnimate={true}
      >
        <Image src={logo} alt="logo" />
      </TextLoader>
    ),
    description: "Loader with a Logo animating like a heartbeat",
    demoCode: `<TextLoader
    key="18"
    show={true}
    logo={true}
    textColor="#C5A967"
    fontWeightValue={800}
    logoHeight="200px"
    logoWidth="200px"
    logoAnimate={true}
  >
    <Image src={logo} alt="logo" />
  </TextLoader>`,
  },
  {
    name: "Horizontally Aligned Loader",
    code: (
      <TextLoader
        key="19"
        show={true}
        logo={true}
        textColor="#C5A967"
        fontWeightValue={800}
        logoHeight="200px"
        logoWidth="200px"
        logoAnimate={true}
        loader={true}
        loaderStyle="CircularLoader"
        row={true}
      >
        <Image src={logo} alt="logo" />
      </TextLoader>
    ),
    description:
      "Loader with all logo, loaderIcon and Loading Text arranged in a row",
    demoCode: `<TextLoader
    key="19"
    show={true}
    logo={true}
    textColor="#C5A967"
    fontWeightValue={800}
    logoHeight="200px"
    logoWidth="200px"
    logoAnimate={true}
    loader={true}
    loaderStyle="CircularLoader"
    row={true}
  >
    <Image src={logo} alt="logo" />
  </TextLoader>
  />`,
  },
];

export default loaderDemo;
