import { ProfileShimmer } from "react-ui-loader";

const shimmerDemo = [
  {
    name: "Default Shimmer",
    code: <ProfileShimmer key="1" show={true} />,
    description:
      "Default Shimmer with plain text as 'loading...' on fullscreen black background  ",
    demoCode: `<ProfileShimmer show={true} />`,
  },
];

export default shimmerDemo;
