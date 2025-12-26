import {
  VscodeButton,
  VscodeButtonGroup,
} from "@vscode-elements/react-elements";

export default function BadgePage() {
  return (
    <div>
      <h1>Button</h1>
      <p>
        <VscodeButton>Button</VscodeButton>
      </p>
      <p>
        <VscodeButtonGroup>
          <VscodeButton>Button group</VscodeButton>
          <VscodeButton icon="chevron-down" title="More actions"></VscodeButton>
        </VscodeButtonGroup>
      </p>
    </div>
  );
}
