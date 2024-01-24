import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export const DemoCard = ({ e }: any) => {
  return (
    <Card className=" min-h-96  w-1/5">
      <div className="h-16 w-1/6 absolute ">{e.code}</div>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{e.description}</p>
      </CardContent>
      <CardFooter className="w-full flex justify-around ">
        <Button>View Code</Button>
        <Button>View Demo</Button>
      </CardFooter>
    </Card>
  );
};
