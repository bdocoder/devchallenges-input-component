import Input from "../components/Input";

export default function Index() {
  return <div>
    <Input />
    <Input error />
    {/* <br /> */}
    <Input disabled />
    {/* <br /> */}
    <Input helperText="hello world" />
    <Input helperText="hello world" error />
  </div>
}
