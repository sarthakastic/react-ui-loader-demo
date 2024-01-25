import { ProfileShimmer } from "react-ui-loader";

const shimmerDemo = [
  {
    name: "Default Shimmer",
    code: <ProfileShimmer key="1" show={true} />,
    description:
      "Default Shimmer with white background and gray shimmer effect containing cover photo, profile picture, line and cards",
    demoCode: `<ProfileShimmer show={true} />`,
  },
  {
    name: "Profile Picture Center Shimmer",
    code: <ProfileShimmer key="2" show={true} profilePositionCenter={true} />,
    description: "Shimmer with Profile Picture in the centre of the screen ",
    demoCode: `<ProfileShimmer show={true} profilePositionCenter={true} />`,
  },
  {
    name: "Profile Picture Size Shimmer",
    code: <ProfileShimmer key="3" show={true} profileDimension="50px" />,
    description:
      "Shimmer with custom size of profile picture with default shape as circle",
    demoCode: `<ProfileShimmer show={true} profileDimension="50px" />`,
  },
  {
    name: "Rounded Corner Profile Shimmer",
    code: <ProfileShimmer key="4" show={true} profileShape="roundedCorner" />,
    description: "Shimmer with Rounded Corner shaped profile picture",
    demoCode: `<ProfileShimmer show={true} profileShape="roundedCorner" />`,
  },
  {
    name: "Square Profile Shimmer",
    code: <ProfileShimmer key="5" show={true} profileShape="square" />,
    description: "Shimmer with Square shaped profile picture",
    demoCode: `<ProfileShimmer show={true}  profileShape="square" />`,
  },
  {
    name: "No profile Picture Shimmer",
    code: <ProfileShimmer key="6" show={true} showProfile={false} />,
    description: "Shimmer with no Profile Picture",
    demoCode: `<ProfileShimmer show={true} showProfile={false}  />`,
  },
  {
    name: "Custom Cover Height Shimmer",
    code: <ProfileShimmer key="7" show={true} coverHeight="10vh" />,
    description: "Shimmer with custom cover height",
    demoCode: `<ProfileShimmer show={true} coverHeight="10vh" />`,
  },
  {
    name: "Custom Cover Width Shimmer",
    code: <ProfileShimmer key="8" show={true} coverWidth="40vw" />,
    description: "Shimmer with custom cover width",
    demoCode: `<ProfileShimmer show={true} coverWidth="40vw" />`,
  },
  {
    name: "No Cover Shimmer",
    code: <ProfileShimmer key="9" show={true} showCover={false} />,
    description: "Shimmer with no cover",
    demoCode: `<ProfileShimmer show={true} showCover={false} />`,
  },
  {
    name: "No Line Shimmer",
    code: <ProfileShimmer key="10" show={true} showLines={false} />,
    description: "Shimmer with no lines",
    demoCode: `<ProfileShimmer show={true} showLines={false} />`,
  },
  {
    name: "Custom Line Height Shimmer",
    code: <ProfileShimmer key="11" show={true} lineHeight={"25px"} />,
    description: "Shimmer with custom line width",
    demoCode: `<ProfileShimmer show={true} lineHeight={"25px"} />`,
  },
  {
    name: "Custom Line width Shimmer",
    code: <ProfileShimmer key="12" show={true} lineWidth={"50%"} />,
    description: "Shimmer with custom line width",
    demoCode: `<ProfileShimmer show={true} lineWidth={"50%"} />`,
  },
  {
    name: "Custom Lines Quantity Shimmer",
    code: <ProfileShimmer key="13" show={true} numberOfLines={25} />,
    description: "Shimmer with custom number of lines",
    demoCode: `<ProfileShimmer show={true} numberOfLines={25} />`,
  },
  {
    name: "No Cards Shimmer",
    code: <ProfileShimmer key="14" show={true} showCards={false} />,
    description: "Shimmer with no cards",
    demoCode: `<ProfileShimmer show={true} showCards={false} />`,
  },
  {
    name: "Custom Cards Quantity Shimmer",
    code: <ProfileShimmer key="15" show={true} numberOfCards={25} />,
    description: "Shimmer with custom number of cards",
    demoCode: `<ProfileShimmer show={true} numberOfCards={25} />`,
  },
  {
    name: "Custom Card Height Shimmer",
    code: <ProfileShimmer key="16" show={true} cardHeight="200px" />,
    description: "Shimmer with custom card height",
    demoCode: `<ProfileShimmer show={true} cardHeight="200px" />`,
  },
  {
    name: "Custom Card Width Shimmer",
    code: <ProfileShimmer key="17" show={true} cardWidth="200px" />,
    description: "Shimmer with custom card width",
    demoCode: `<ProfileShimmer show={true} cardWidth="200px" />`,
  },
  {
    name: "Custom Background Shimmer",
    code: <ProfileShimmer key="18" show={true} backgroundColor="#D6CDA4" />,
    description: "Shimmer with custom background color",
    demoCode: `<ProfileShimmer show={true} backgroundColor="#D6CDA4" />`,
  },
  {
    name: "Custom Color Shimmer",
    code: (
      <ProfileShimmer
        key="19"
        show={true}
        color="#C6A969"
        shimmerColor="#D6CDA4"
        backgroundColor="#D6CDA4"
      />
    ),
    description: "Shimmer with custom background color and shimmer color",
    demoCode: ` <ProfileShimmer
    show={true}
    color="#C6A969"
    shimmerColor="#D6CDA4"
    backgroundColor="#D6CDA4"
  />`,
  },
];

export default shimmerDemo;
