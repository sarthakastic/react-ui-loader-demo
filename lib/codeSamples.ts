export const installNpm = `npm install react-ui-loader`;

export const installYarn = `yarn add react-ui-loader`;

export const installPnpm = `pnpm add react-ui-loader`;

export const importDefaultLoader = `import TextLoader from "react-ui-loader"

export default function MyApp() {
    return (
        <TextLoader show={true} />
    )
}`;

export const importDefaultShimmer = `import ProfileShimmer from "react-ui-loader"

export default function MyApp() {
    return (
        <ProfileShimmer show={true} />
    )
}`;
