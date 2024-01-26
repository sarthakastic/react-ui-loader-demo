import { ProfileShimmer } from "react-ui-loader";
import Image from "next/image";
import defaultShimmer from "../public/defaultShimmer.png";
import profilePictureCenterShimmer from "../public/profilePictureCentreShimmer.png";
import profilePictureSizeShimmer from "../public/profilePictureSizeShimmer.png";
import roundedCornerProfileShimmer from "../public/roundedCornerProfilePictureShimmer.png";
import squareProfileShimmer from "../public/squareProfileShimmer.png";
import noProfilePictureShimmer from "../public/noProfilePictureShimmer.png";
import customCoverHeightShimmer from "../public/customCoverHeightShimmer.png";
import customCoverWidthShimmer from "../public/customCoverWidthShimmer.png";
import noCoverShimmer from "../public/noCoverShimmer.png";
import noLineShimmer from "../public/noLineShimmer.png";
import customLineHeightShimmer from "../public/customLineHeightShimmer.png";
import customLineWidthShimmer from "../public/customLineWidthShimmer.png";
import customLineQuantityShimmer from "../public/customLineQuantityShimmer.png";
import noCardsShimmer from "../public/noCardsShimmer.png";
import customCardsQuantityShimmer from "../public/customCardsQuantityShimmer.png";
import customCardHeightShimmer from "../public/customCardHeightShimmer.png";
import customCardWidthShimmer from "../public/customCardWidthShimmer.png";
import customBackgroundShimmer from "../public/customBackgroundShimmer.png";
import customColorShimmer from "../public/customColorShimmer.png";

const shimmerDemo = [
  {
    name: "Default Shimmer",
    code: <ProfileShimmer key="1" show={true} />,
    description:
      "Default Shimmer with white background and gray shimmer effect containing cover photo, profile picture, line and cards",
    demoCode: `<ProfileShimmer show={true} />`,
    image: <Image src={defaultShimmer} alt="default shimmer" />,
    id: "defaultShimmer",
  },
  {
    name: "Profile Picture Center Shimmer",
    code: <ProfileShimmer key="2" show={true} profilePositionCenter={true} />,
    description: "Shimmer with Profile Picture in the centre of the screen ",
    demoCode: `<ProfileShimmer show={true} profilePositionCenter={true} />`,
    image: (
      <Image
        src={profilePictureCenterShimmer}
        alt="profile picture center shimmer"
      />
    ),
    id: "profilePictureCenterShimmer",
  },
  {
    name: "Profile Picture Size Shimmer",
    code: <ProfileShimmer key="3" show={true} profileDimension="50px" />,
    description:
      "Shimmer with custom size of profile picture with default shape as circle",
    demoCode: `<ProfileShimmer show={true} profileDimension="50px" />`,
    image: (
      <Image
        src={profilePictureSizeShimmer}
        alt="profile picture size shimmer"
      />
    ),
    id: "profilePictureSizeShimmer",
  },
  {
    name: "Rounded Corner Profile Shimmer",
    code: <ProfileShimmer key="4" show={true} profileShape="roundedCorner" />,
    description: "Shimmer with Rounded Corner shaped profile picture",
    demoCode: `<ProfileShimmer show={true} profileShape="roundedCorner" />`,
    image: (
      <Image
        src={roundedCornerProfileShimmer}
        alt="rounded corner profile shimmer"
      />
    ),
    id: "roundedCornerProfileShimmer",
  },
  {
    name: "Square Profile Shimmer",
    code: <ProfileShimmer key="5" show={true} profileShape="square" />,
    description: "Shimmer with Square shaped profile picture",
    demoCode: `<ProfileShimmer show={true}  profileShape="square" />`,
    image: <Image src={squareProfileShimmer} alt="square profile shimmer" />,
    id: "squareProfileShimmer",
  },
  {
    name: "No profile Picture Shimmer",
    code: <ProfileShimmer key="6" show={true} showProfile={false} />,
    description: "Shimmer with no Profile Picture",
    demoCode: `<ProfileShimmer show={true} showProfile={false}  />`,
    image: (
      <Image src={noProfilePictureShimmer} alt="no profile picture shimmer" />
    ),
    id: "noProfilePictureShimmer",
  },
  {
    name: "Custom Cover Height Shimmer",
    code: <ProfileShimmer key="7" show={true} coverHeight="10vh" />,
    description: "Shimmer with custom cover height",
    demoCode: `<ProfileShimmer show={true} coverHeight="10vh" />`,
    image: (
      <Image src={customCoverHeightShimmer} alt="custom cover height shimmer" />
    ),
    id: "customCoverHeightShimmer",
  },
  {
    name: "Custom Cover Width Shimmer",
    code: <ProfileShimmer key="8" show={true} coverWidth="40vw" />,
    description: "Shimmer with custom cover width",
    demoCode: `<ProfileShimmer show={true} coverWidth="40vw" />`,
    image: (
      <Image src={customCoverWidthShimmer} alt="custom cover width shimmer" />
    ),
    id: "customCoverWidthShimmer",
  },
  {
    name: "No Cover Shimmer",
    code: <ProfileShimmer key="9" show={true} showCover={false} />,
    description: "Shimmer with no cover",
    demoCode: `<ProfileShimmer show={true} showCover={false} />`,
    image: <Image src={noCoverShimmer} alt="no cover shimmer" />,
    id: "noCoverShimmer",
  },
  {
    name: "No Line Shimmer",
    code: <ProfileShimmer key="10" show={true} showLines={false} />,
    description: "Shimmer with no lines",
    demoCode: `<ProfileShimmer show={true} showLines={false} />`,
    image: <Image src={noLineShimmer} alt="no line shimmer" />,
    id: "noLineShimmer",
  },
  {
    name: "Custom Line Height Shimmer",
    code: <ProfileShimmer key="11" show={true} lineHeight={"25px"} />,
    description: "Shimmer with custom line width",
    demoCode: `<ProfileShimmer show={true} lineHeight={"25px"} />`,
    image: (
      <Image src={customLineHeightShimmer} alt="custom line height shimmer" />
    ),
    id: "customLineHeightShimmer",
  },
  {
    name: "Custom Line width Shimmer",
    code: <ProfileShimmer key="12" show={true} lineWidth={"50%"} />,
    description: "Shimmer with custom line width",
    demoCode: `<ProfileShimmer show={true} lineWidth={"50%"} />`,
    image: (
      <Image src={customLineWidthShimmer} alt="custom line width shimmer" />
    ),
    id: "customLineWidthShimmer",
  },
  {
    name: "Custom Lines Quantity Shimmer",
    code: <ProfileShimmer key="13" show={true} numberOfLines={25} />,
    description: "Shimmer with custom number of lines",
    demoCode: `<ProfileShimmer show={true} numberOfLines={25} />`,
    image: (
      <Image
        src={customLineQuantityShimmer}
        alt="custom line quantity shimmer"
      />
    ),
    id: "customLineQuantityShimmer",
  },
  {
    name: "No Cards Shimmer",
    code: <ProfileShimmer key="14" show={true} showCards={false} />,
    description: "Shimmer with no cards",
    demoCode: `<ProfileShimmer show={true} showCards={false} />`,
    image: <Image src={noCardsShimmer} alt="no cards shimmer" />,
    id: "noCardsShimmer",
  },
  {
    name: "Custom Cards Quantity Shimmer",
    code: <ProfileShimmer key="15" show={true} numberOfCards={25} />,
    description: "Shimmer with custom number of cards",
    demoCode: `<ProfileShimmer show={true} numberOfCards={25} />`,
    image: (
      <Image
        src={customCardsQuantityShimmer}
        alt="custom card quantity shimmer"
      />
    ),
    id: "customCardsQuantityShimmer",
  },
  {
    name: "Custom Card Height Shimmer",
    code: <ProfileShimmer key="16" show={true} cardHeight="200px" />,
    description: "Shimmer with custom card height",
    demoCode: `<ProfileShimmer show={true} cardHeight="200px" />`,
    image: (
      <Image src={customCardHeightShimmer} alt="custom card height shimmer" />
    ),
    id: "customCardHeightShimmer",
  },
  {
    name: "Custom Card Width Shimmer",
    code: <ProfileShimmer key="17" show={true} cardWidth="200px" />,
    description: "Shimmer with custom card width",
    demoCode: `<ProfileShimmer show={true} cardWidth="200px" />`,
    image: (
      <Image src={customCardWidthShimmer} alt="custom card width shimmer" />
    ),
    id: "customCardWidthShimmer",
  },
  {
    name: "Custom Background Shimmer",
    code: <ProfileShimmer key="18" show={true} backgroundColor="#D6CDA4" />,
    description: "Shimmer with custom background color",
    demoCode: `<ProfileShimmer show={true} backgroundColor="#D6CDA4" />`,
    image: (
      <Image src={customBackgroundShimmer} alt="custom background shimmer" />
    ),
    id: "customBackgroundShimmer",
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
    image: <Image src={customColorShimmer} alt="custom color shimmer" />,
    id: "customColorShimmer",
  },
];

export default shimmerDemo;
