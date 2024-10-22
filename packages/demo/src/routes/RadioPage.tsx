import { VscodeRadio, VscodeRadioGroup } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function RadioPage() {
  return (
    <div>
      <h1>Radio</h1>
      <h2>Change event</h2>
      <p>
        <VscodeRadioGroup
          onChange={logEvents}
        >
          <VscodeRadio
            name="radio-1"
            onChange={logEvents}
          >
            Option #1
          </VscodeRadio>
          <VscodeRadio name="radio-1">Option #2</VscodeRadio>
          <VscodeRadio name="radio-1">Option #3</VscodeRadio>
        </VscodeRadioGroup>
      </p>
      <h2>Invalid event</h2>
      <form action="#">
        <p>
          <VscodeRadioGroup>
            <VscodeRadio
              name="radio-2"
              onInvalid={logEvents}
              required
            >
              Option #1
            </VscodeRadio>
            <VscodeRadio name="radio-2">Option #2</VscodeRadio>
            <VscodeRadio name="radio-2">Option #3</VscodeRadio>
          </VscodeRadioGroup>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
