import {
  VscodeOption,
  VscodeSingleSelect,
} from "@vscode-elements/react-elements";

export default function SingleSelectPage() {
  return (
    <div>
      <h1>Single Select</h1>
      <h2>Listen "change" and "click" events</h2>
      <p>
        <VscodeSingleSelect
          onChange={(ev) => {
            console.log(ev);
          }}
          onClick={(ev) => {
            console.log(ev);
          }}
        >
          <VscodeOption>Lorem</VscodeOption>
          <VscodeOption>Ipsum</VscodeOption>
          <VscodeOption>Dolor</VscodeOption>
        </VscodeSingleSelect>
      </p>
      <h2>Listen "invalid" event</h2>
      <form action="#">
        <p>
          <VscodeSingleSelect
            onInvalid={(ev) => {
              console.log(ev);
            }}
            required
            name="select-2"
          >
            <VscodeOption></VscodeOption>
            <VscodeOption>Lorem</VscodeOption>
            <VscodeOption>Ipsum</VscodeOption>
            <VscodeOption>Dolor</VscodeOption>
          </VscodeSingleSelect>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}
