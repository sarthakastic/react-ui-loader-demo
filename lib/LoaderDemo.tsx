import { TextLoader } from "react-ui-loader";
import logo from "../public/ruilLogo.png";
import Image from "next/image";
import defaultLoader from "../public/defaultLoader.png";
import customBackgroundColorLoader from "../public/customBackgroundColorLoader.png";
import customBackgroundOpacityLoader from "../public/customBackgroundOpacityLoader.png";
import customTextLoader from "../public/customTextLoader.png";
import customWidthLoader from "../public/customWidthLoader.png";
import customHeightLoader from "../public/customHeightLoader.png";
import customLoaderSize from "../public/customLoaderSize.png";
import customTextColorLoader from "../public/customTextColorLoader.png";
import customTextSizeLoader from "../public/customTextSizeLoader.png";
import customTextWeightLoader from "../public/customTextWeightLoader.png";
import animatedTextLoader from "../public/animatedTextLoader.png";
import customLoaderIconColor from "../public/customaLoaderIconColor.png";
import customLoaderIconCircle from "../public/customLoaderIconCircle.png";
import customLoaderIconDots from "../public/customLoaderIconDots.png";
import customLoaderIconSizeLoader from "../public/customLoaderIconSizeLoader.png";
import logoLoader from "../public/logoLoader.png";
import animatedLogoLoader from "../public/animatedLogoLoader.png";
import customSizeLogoLoader from "../public/customSizeLogoLoader.png";
import horizontallyAlignedLoader from "../public/horizontallyAlignedLoader.png";

const loaderDemo = [
  {
    name: "Default Loader",
    code: <TextLoader key="1" show={true} />,
    description:
      "Default Loader with plain text as 'loading...' on fullscreen black background  ",
    demoCode: `<TextLoader show={true} />`,
    image: <Image src={defaultLoader} alt="default loader" />,
    id: "defaultLoader",
  },
  {
    name: "Custom Background Color Loader",
    code: <TextLoader key="2" show={true} bgColor="#76453B" />,
    description: "Loader with custom background color",
    demoCode: `<TextLoader show={true} bgColor="#76453B" />`,
    image: (
      <Image
        src={customBackgroundColorLoader}
        alt="custom background color loader"
      />
    ),
    id: "customBackgroundColorLoader",
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
    image: (
      <Image
        src={customBackgroundOpacityLoader}
        alt="custom background opacity loader"
      />
    ),
    id: "customBackgroundOpacityLoader",
  },
  {
    name: "Custom Text Loader",
    code: <TextLoader key="4" show={true} loaderText="Custom Text" />,
    description: "Loader with custom text",
    demoCode: `<TextLoader show={true} loaderText="Custom Text" />`,
    image: <Image src={customTextLoader} alt="custom text loader" />,
    id: "customTextLoader",
  },
  {
    name: "Custom Width Loader",
    code: <TextLoader key="5" show={true} widthValue={"200px"} />,
    description: "Loader with custom width size",
    demoCode: `<TextLoader show={true} widthValue={"200px"} />`,
    image: <Image src={customWidthLoader} alt="custom width loader" />,
    id: "customWidthLoader",
  },
  {
    name: "Custom Height Loader",
    code: <TextLoader key="6" show={true} heightValue={"100px"} />,
    description: "Loader with custom height size",
    demoCode: `<TextLoader show={true} heightValue={"100px"} />`,
    image: <Image src={customHeightLoader} alt="custom height loader" />,
    id: "customHeightLoader",
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
    image: <Image src={customLoaderSize} alt="custom loader size" />,
    id: "customLoaderSize",
  },
  {
    name: "Custom Text Color Loader",
    code: <TextLoader key="8" show={true} textColor="red" />,
    description: "Loader with custom text color",
    demoCode: `<TextLoader
    show={true}
    textColor="red"
    />`,
    image: <Image src={customTextColorLoader} alt="default shimmer" />,
    id: "customTextColorLoader",
  },
  {
    name: "Custom Text Size Loader",
    code: <TextLoader key="9" show={true} fontSizeValue="64px" />,
    description: "Loader with custom text size",
    demoCode: `<TextLoader
    show={true}
    fontSizeValue="64px" 
    />`,
    image: <Image src={customTextSizeLoader} alt="custom text color loader" />,
    id: "customTextSizeLoader",
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
    image: (
      <Image src={customTextWeightLoader} alt="custom text weight loader" />
    ),
    id: "customTextWeightLoader",
  },
  {
    name: "Animated Text Loader",
    code: <TextLoader key="11" show={true} textAnimate={true} />,
    description: "Loader with an animated text",
    demoCode: `<TextLoader
    show={true}
    textAnimate={true}
    />`,
    image: <Image src={animatedTextLoader} alt="animated text loader" />,
    id: "animatedTextLoader",
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
    image: (
      <Image src={customLoaderIconCircle} alt="custom loader icon circle" />
    ),
    id: "customLoaderIconCircle",
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
    image: <Image src={customLoaderIconDots} alt="custom loader icon dots" />,
    id: "customLoaderIconDots",
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
    image: (
      <Image src={customLoaderIconSizeLoader} alt="custom loader size loader" />
    ),
    id: "customLoaderIconSizeLoader",
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
    image: <Image src={customLoaderIconColor} alt="custom loader icon color" />,
    id: "customLoaderIconColor",
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
    image: <Image src={logoLoader} alt="logo loader" />,
    id: "logoLoader",
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
        logoHeight="50px"
        logoWidth="50px"
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
    image: <Image src={customSizeLogoLoader} alt="custom size logo loader" />,
    id: "customSizeLogoLoader",
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
    image: <Image src={animatedLogoLoader} alt="animated logo loader" />,
    id: "animatedLogoLoader",
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
    image: (
      <Image
        src={horizontallyAlignedLoader}
        alt="horizontally aligned loader"
      />
    ),
    id: "horizontallyAlignedLoader",
  },
];

export default loaderDemo;
