import {
  VscodeOption,
  VscodeSingleSelect,
} from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function SingleSelectPage() {
  return (
    <div>
      <h1>Single Select</h1>
      <h2>Listen "change" and "click" events</h2>
      <p>
        <VscodeSingleSelect
          onChange={logEvents}
          onClick={logEvents}
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
            onInvalid={logEvents}
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
