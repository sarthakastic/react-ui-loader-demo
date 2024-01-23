"use client";

import { CopyBlock, tomorrowNightBright } from "react-code-blocks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  importDefaultShimmer,
  importDefaultLoader,
  installNpm,
  installPnpm,
  installYarn,
} from "@/lib/codeSamples";

export default function Document() {
  return (
    <div className=" m-auto w-2/3 md:w-1/2 min-h-screen ">
      <div
        id="introduction"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Introduction
      </div>
      <div className="text-secondaryLight">
        Welcome to{" "}
        <span className="font-extrabold text-primaryLight">
          {" "}
          React UI Loader
        </span>
        , a powerful and versatile npm package crafted with TypeScript, React,
        and CSS to simplify the integration of customisable lightweight shimmers
        and loaders into your web applications. In the dynamic world of web
        development, creating loaders and shimmers that seamlessly integrate
        with your app&apos;s design can be a time-consuming task. React UI
        Loader comes to the rescue, offering a comprehensive solution that
        streamlines the process of adding loading indicators, making your
        application not only visually appealing but also providing a smoother
        user experience.
      </div>
      <div
        id="motivation"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Motivation
      </div>
      <div className="text-secondaryLight">
        The motive behind React UI Loader is to empower developers by
        eliminating the need for building loaders and shimmers from scratch. We
        understand the importance of maintaining a polished and responsive user
        interface, and that&apos;s why we have created a package that allows you
        to effortlessly incorporate customisable loading elements into your
        React applications. With React UI Loader, you can focus more on building
        the core functionality of your app, while we take care of the visual
        aspects, providing a polished and professional touch. <br /> <br />
        <span className="font-extrabold text-primaryLight ">
          {" "}
          Key Features:{" "}
        </span>{" "}
        <br /> <br />
        1. Customisation: React UI Loader offers a wide range of customization
        options, allowing you to tailor the appearance of loaders and shimmers
        to match your app&apos;s design seamlessly. Adjust colors, sizes, and
        animations with ease. <br /> <br /> 2. Lightweight: We believe in
        keeping things simple and efficient. React UI Loader is designed to be
        lightweight, ensuring that your application&apos;s performance remains
        unaffected while still delivering a visually engaging loading
        experience. <br /> <br /> 3. Versatility: Whether you need a shimmer
        effect for content placeholders or a loader for asynchronous operations,
        React UI Loader has got you covered. With multiple pre-built forms and
        styles, you can choose the loading indicator that suits your specific
        use case. <br /> <br /> 4. Ease of Integration: Integration is a breeze
        with React UI Loader. Thanks to TypeScript and React, you benefit from a
        type-safe and component-based approach, making the implementation
        process smooth and intuitive. <br /> <br /> By choosing React UI Loader,
        you not only save valuable development time but also enhance the overall
        user experience of your application. Say goodbye to the hassle of
        creating loaders and shimmers manually, and let React UI Loader take
        your React app&apos;s visual appeal to the next level.
      </div>
      <div
        id="installation"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Installation
      </div>
      <div className="text-secondaryLight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non
        ipsam, placeat neque eligendi tempore rem maxime dolor laborum ratione
        molestiae dolore explicabo animi culpa enim beatae totam iste. Minus!
      </div>
      <br />
      <CopyBlock
        text={installNpm}
        language={"typescript"}
        showLineNumbers={false}
        theme={tomorrowNightBright}
        codeBlock
      />
      <span className="text-secondaryLight">or</span>
      <CopyBlock
        text={installPnpm}
        language={"typescript"}
        showLineNumbers={false}
        theme={tomorrowNightBright}
        codeBlock
      />
      <span className="text-secondaryLight">or</span>
      <CopyBlock
        text={installYarn}
        language={"typescript"}
        showLineNumbers={false}
        theme={tomorrowNightBright}
        codeBlock
      />
      <div
        id="loader"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Loader
      </div>
      <div className="text-secondaryLight">
        Loader helps you add loader while you carry out async processess, it is
        responsive and easily customisable. We can use it by importing it at top
        of our component and passing the required prop show.
      </div>
      <br />
      <CopyBlock
        text={importDefaultLoader}
        language={"typescript"}
        showLineNumbers={true}
        theme={tomorrowNightBright}
        codeBlock
      />
      <div
        id="loader"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Loader Props
      </div>
      <Table className=" text-amber-100  bg-secondaryLight font-bold text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="text-primaryLight font-extrabold ">
              Prop Name
            </TableHead>
            <TableHead className="text-primaryLight font-extrabold ">
              Datatype
            </TableHead>
            <TableHead className="text-primaryLight font-extrabold ">
              Required
            </TableHead>
            <TableHead className="text-right text-primaryLight font-extrabold  ">
              Default Value
            </TableHead>
            <TableHead className="text-right text-primaryLight font-extrabold  ">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-extrabold">show</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>yes</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines whether to hide or show loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">bgColor</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">black</TableCell>
            <TableCell className="text-right">
              Takes hex values of color as input to determine background color
              of loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">widthValue</TableCell>
            <TableCell>string or number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">100vw</TableCell>
            <TableCell className="text-right">
              Determines the width of loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">heightValue</TableCell>
            <TableCell>string or number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">100vh</TableCell>
            <TableCell className="text-right">
              Determines the height of loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">zIndexing</TableCell>
            <TableCell>number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">1</TableCell>
            <TableCell className="text-right">
              Determines the z-index for loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">backgroundOpacity</TableCell>
            <TableCell>number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">1</TableCell>
            <TableCell className="text-right">
              Determines the opacity of background in Loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">justifycontent</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">center</TableCell>
            <TableCell className="text-right">
              Determines the horizontal position of loader icon, loader text and
              loader image according to flex properties
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">alignitems</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">center</TableCell>
            <TableCell className="text-right">
              Determines the vertical position of loader icon, loader text and
              loader image according to flex properties
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">loaderText</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">Loading...</TableCell>
            <TableCell className="text-right">
              Takes input as the text we want to display on loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">textColor</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">white</TableCell>
            <TableCell className="text-right">
              Takes input as the color of the text you want to display on
              loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">fontSizeValue</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">18px</TableCell>
            <TableCell className="text-right">
              Takes input as the font size of the text you want to display on
              loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">fontWeightValue</TableCell>
            <TableCell>number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">400</TableCell>
            <TableCell className="text-right">
              Takes input as the font weight of the text you want to display on
              loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">loaderColor</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">white</TableCell>
            <TableCell className="text-right">
              Takes string as input to determine the color of loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">loader</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">false</TableCell>
            <TableCell className="text-right">
              Determines wheteher to show the loader or not
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">loaderStyle</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">Circular</TableCell>
            <TableCell className="text-right">
              Determines the style of the loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">loaderSize</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">medium</TableCell>
            <TableCell className="text-right">
              Determines the size of the loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">textAnimate</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">false</TableCell>
            <TableCell className="text-right">
              Determines if we want to give an animation to the loading text
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">logo</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">false</TableCell>
            <TableCell className="text-right">
              Determines if we want to show the logo or not
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">logoHeight</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">48px</TableCell>
            <TableCell className="text-right">
              Determines the height of logo in loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">logoWidth</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">48px</TableCell>
            <TableCell className="text-right">
              Determines the width of logo in loading screen
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">logoAnimate</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">false</TableCell>
            <TableCell className="text-right">
              Determines if we want to give an animation to the logo
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">children</TableCell>
            <TableCell>ReactNode</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">null</TableCell>
            <TableCell className="text-right">
              Takes ReactNode as input to determine the logo in the loader
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">row</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Arrange loader icon, loader text and loader image in a row or
              column
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div
        id="shimmer"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Shimmer
      </div>
      <div className="text-secondaryLight">
        Shimmer helps you add shimeer while you carry out async processess, it
        is responsive and easily customisable. We can use it by importing it in
        our component and passing the required prop show.
      </div>
      <br />
      <CopyBlock
        text={importDefaultShimmer}
        language={"typescript"}
        showLineNumbers={true}
        theme={tomorrowNightBright}
        codeBlock
      />
      <div
        id="shimmerprops"
        className="text-primaryLight font-extrabold text-6xl py-5  "
      >
        Shimmer Props
      </div>
      <Table className=" text-amber-100  bg-secondaryLight font-bold text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="text-primaryLight font-extrabold ">
              Prop Name
            </TableHead>
            <TableHead className="text-primaryLight font-extrabold ">
              Datatype
            </TableHead>
            <TableHead className="text-primaryLight font-extrabold ">
              Required
            </TableHead>
            <TableHead className="text-right text-primaryLight font-extrabold  ">
              Default Value
            </TableHead>
            <TableHead className="text-right text-primaryLight font-extrabold  ">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-extrabold">show</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>yes</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines whether to hide or show shimmer
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">
              profilePositionCenter
            </TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">false</TableCell>
            <TableCell className="text-right">
              Determines if profile picture must be in center or not
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">profileShape</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">circle</TableCell>
            <TableCell className="text-right">
              Determines the shape of profile picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">profileDimension</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">200px</TableCell>
            <TableCell className="text-right">
              Determines the size of profile picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">coverHeight</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">25%</TableCell>
            <TableCell className="text-right">
              Determines the height of cover picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">coverWidth</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">100%</TableCell>
            <TableCell className="text-right">
              Determines the width of cover picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">showCover</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines the whether to hide or display the cover picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">showProfile</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines the whether to hide or display the profile picure
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">showLines</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines the whether to hide or display the lines
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">numberOfLines</TableCell>
            <TableCell>number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">10</TableCell>
            <TableCell className="text-right">
              Determines the total number of lines to display
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">numberOfCards</TableCell>
            <TableCell>number</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">10</TableCell>
            <TableCell className="text-right">
              Determines the total number of Cards to display
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">showCards</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">true</TableCell>
            <TableCell className="text-right">
              Determines the whether to hide or display the cards
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">cardHeight</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">420px</TableCell>
            <TableCell className="text-right">
              Determines the height of cards
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">cardWidth</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">420px</TableCell>
            <TableCell className="text-right">
              Determines the width of cards
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">backgroundColor</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">white</TableCell>
            <TableCell className="text-right">
              Determines the color of background
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">color</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">gray</TableCell>
            <TableCell className="text-right">
              Determines the color of components
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">shimmerColor</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">white</TableCell>
            <TableCell className="text-right">
              Determines the color of shimmer effect
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">lineHeight</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">10px</TableCell>
            <TableCell className="text-right">
              Determines the height of lines in shimmer
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">lineWidth</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">98%</TableCell>
            <TableCell className="text-right">
              Determines the width of lines in shimmer
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">shimmerHeight</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">fit-content</TableCell>
            <TableCell className="text-right">
              Determines the height of shimmer component
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-extrabold">shimmerWidth</TableCell>
            <TableCell>string</TableCell>
            <TableCell>no</TableCell>
            <TableCell className="text-right">100%</TableCell>
            <TableCell className="text-right">
              Determines the width of shimmer component
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
