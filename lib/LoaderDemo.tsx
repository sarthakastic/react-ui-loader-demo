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
    description: "Loader with custom background color",
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
    description: "Loader with custom opacity of background",
    demoCode: ` <TextLoader
    show={true}
    bgColor="#76453B"
    backgroundOpacity={0.5}
  />`,
  },
  {
    name: "Custom Text Loader",
    code: <TextLoader key="4" show={true} loaderText="Custom Text" />,
    description: "Loader with custom text",
    demoCode: `<TextLoader show={true} loaderText="Custom Text" />`,
  },
  {
    name: "Custom Width Loader",
    code: <TextLoader key="5" show={true} widthValue={"200px"} />,
    description: "Loader with custom width size",
    demoCode: `<TextLoader show={true} widthValue={"200px"} />`,
  },
  {
    name: "Custom Height Loader",
    code: <TextLoader key="6" show={true} heightValue={"100px"} />,
    description: "Loader with custom height size",
    demoCode: `<TextLoader show={true} heightValue={"100px"} />`,
  },
  {
    name: "Custom Loader Size",
    code: (
      <TextLoader
        key="7"
        show={true}
        heightValue={"100px"}
        widthValue={"200px"}
      />
    ),
    description: "Loader with custom height and width size",
    demoCode: `<TextLoader
    show={true}
    heightValue={"100px"}
    widthValue={"200px"}
  />`,
  },
  {
    name: "Custom Text Color Loader",
    code: <TextLoader key="8" show={true} textColor="red" />,
    description: "Loader with custom text color",
    demoCode: `<TextLoader
    show={true}
    textColor="red"
  />`,
  },
  {
    name: "Custom Text Size Loader",
    code: <TextLoader key="9" show={true} fontSizeValue="64px" />,
    description: "Loader with custom text size",
    demoCode: `<TextLoader
    show={true}
    fontSizeValue="64px" 
  />`,
  },
  {
    name: "Custom Text Weight Loader",
    code: (
      <TextLoader
        key="10"
        show={true}
        fontSizeValue="64px"
        fontWeightValue={800}
      />
    ),
    description: "Loader with custom font weight",
    demoCode: `<TextLoader
    show={true}
    fontSizeValue="64px"
    fontWeightValue={800}
  />`,
  },
  {
    name: "Animated Text Loader",
    code: <TextLoader key="11" show={true} textAnimate={true} />,
    description: "Loader with an animated text",
    demoCode: `<TextLoader
    show={true}
    textAnimate={true}
  />`,
  },
  {
    name: "Custom Loader Icon Circle",
    code: (
      <TextLoader
        key="12"
        show={true}
        loader={true}
        loaderStyle="CircularLoader"
      />
    ),
    description: "Custom Loader with a revolving circle icon",
    demoCode: `<TextLoader
    show={true}
    loader={true}
    loaderStyle="CircularLoader"
  />`,
  },
  {
    name: "Custom Loader Icon Dots",
    code: (
      <TextLoader key="13" show={true} loader={true} loaderStyle="DotLoader" />
    ),
    description: "Custom Loader with a changing dot size",
    demoCode: `<TextLoader
    show={true} 
    loader={true} 
    loaderStyle="DotLoader" 
  />`,
  },
  {
    name: "Custom loader Size Loader",
    code: (
      <TextLoader
        key="14"
        show={true}
        loader={true}
        loaderStyle="CircularLoader"
        loaderSize="small"
      />
    ),
    description: "Loader with custom size of loader icon",
    demoCode: `<TextLoader
    show={true}
    loader={true}
    loaderStyle="CircularLoader"
    loaderSize="small"
  />`,
  },
  {
    name: "Custom Loader Icon Color",
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
    description: "Loader Icon with a custom color",
    demoCode: `<TextLoader
    show={true}
    loaderText="Custom Text"
    loader={true}
    loaderStyle="DotLoader"
    loaderColor="blue"
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
    description: "Loader with a custom image as logo",
    demoCode: ` <TextLoader
    key="16"
    show={true}
    logo={true}
    textColor="#C5A967"
    fontWeightValue={800}
  >
    <Image src={logo} alt="logo" />
  </TextLoader>`,
  },
  {
    name: "Custom Size Logo Loader",
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
    description: "Loader with a custom size for image as logo",
    demoCode: `<TextLoader
    show={true}
    logo={true}
    textColor="#C5A967"
    fontWeightValue={800}
    logoHeight="200px"
    logoWidth="200px"
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
      "Loader with Logo, Loader Icon and Loading Text arranged in a row",
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
