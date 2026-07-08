import { Sector } from "recharts";

export default function (props: any) {
  return <Sector {...props} fill={props.payload.fill} />;
}
