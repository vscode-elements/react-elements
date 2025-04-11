import {
  VscodeOption,
  VscodeMultiSelect,
} from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function MultiSelectPage() {
  return (
    <div>
      <h1>Multi Select</h1>
      <h2>Listen "change" and "click" events</h2>
      <p>
        <VscodeMultiSelect
          onChange={logEvents}
          onClick={logEvents}
        >
          <VscodeOption>Lorem</VscodeOption>
          <VscodeOption>Ipsum</VscodeOption>
          <VscodeOption>Dolor</VscodeOption>
        </VscodeMultiSelect>
      </p>
      <h2>Listen "invalid" event</h2>
      <form action="#">
        <p>
          <VscodeMultiSelect
            onInvalid={logEvents}
            required
            name="select-2"
          >
            <VscodeOption></VscodeOption>
            <VscodeOption>Lorem</VscodeOption>
            <VscodeOption>Ipsum</VscodeOption>
            <VscodeOption>Dolor</VscodeOption>
          </VscodeMultiSelect>
        </p>
        <button>Submit</button>
      </form>
      <h2>Creatable</h2>
      <form action="#">
        <p>
          <VscodeMultiSelect
            onVscMultiSelectCreateOption={logEvents}
            name="select-3"
            combobox
            creatable
          >
            <VscodeOption>Lorem</VscodeOption>
            <VscodeOption>Ipsum</VscodeOption>
            <VscodeOption>Dolor</VscodeOption>
          </VscodeMultiSelect>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}
