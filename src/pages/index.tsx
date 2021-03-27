import Input from "../components/Input";

export default function Index() {
  return <div>
    <Input id="2" />
    <br />
    <Input id="my-id-2" error />
    <br />
    <Input id="ddd" disabled />
    <br />
    <Input id="dddx" helperText="hello world" error />
  </div>
}
