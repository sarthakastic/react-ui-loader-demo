import { TextLoader } from "react-ui-loader";

const loaderDemo = [
  {
    name: "Default Loader",
    code: <TextLoader key="1" show={true} />,
    description: "loader cnkdcnkdk",
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
];

export default loaderDemo;
