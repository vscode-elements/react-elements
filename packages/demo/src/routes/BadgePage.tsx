import { VscodeBadge } from "@vscode-elements/react-elements";

export default function BadgePage() {
  return (
    <div>
      <h1>Badge</h1>
      <p><VscodeBadge>2 unsaved</VscodeBadge></p>
      <p><VscodeBadge variant="counter">42</VscodeBadge></p>
      <p><VscodeBadge variant="activity-bar-counter">42</VscodeBadge></p>
    </div>
  );
}
