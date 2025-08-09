import { VscodeTree, VscodeTreeItem } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function TextfieldPage() {
  return (
    <div>
      <h1>Tree</h1>
      <VscodeTree id="tree-basic-example" onVscTreeSelect={logEvents}>
        <VscodeTreeItem>
          Fruits
          <VscodeTreeItem>
            Citrus Fruits
            <VscodeTreeItem>Orange</VscodeTreeItem>
            <VscodeTreeItem>Lemon</VscodeTreeItem>
            <VscodeTreeItem>Grapefruit</VscodeTreeItem>
          </VscodeTreeItem>
          <VscodeTreeItem>
            Berries
            <VscodeTreeItem>Strawberry</VscodeTreeItem>
            <VscodeTreeItem>Blueberry</VscodeTreeItem>
            <VscodeTreeItem>Raspberry</VscodeTreeItem>
          </VscodeTreeItem>
          <VscodeTreeItem>
            Tropical Fruits
            <VscodeTreeItem>Mango</VscodeTreeItem>
            <VscodeTreeItem>Pineapple</VscodeTreeItem>
            <VscodeTreeItem>Papaya</VscodeTreeItem>
          </VscodeTreeItem>
        </VscodeTreeItem>
        <VscodeTreeItem>
          Vegetables
          <VscodeTreeItem>
            Leafy Greens
            <VscodeTreeItem>Spinach</VscodeTreeItem>
            <VscodeTreeItem>Lettuce</VscodeTreeItem>
            <VscodeTreeItem>Kale</VscodeTreeItem>
          </VscodeTreeItem>
          <VscodeTreeItem>
            Root Vegetables
            <VscodeTreeItem>Carrot</VscodeTreeItem>
            <VscodeTreeItem>Beetroot</VscodeTreeItem>
            <VscodeTreeItem>Radish</VscodeTreeItem>
          </VscodeTreeItem>
          <VscodeTreeItem>
            Nightshades
            <VscodeTreeItem>Tomato</VscodeTreeItem>
            <VscodeTreeItem>Eggplant</VscodeTreeItem>
            <VscodeTreeItem>Bell Pepper</VscodeTreeItem>
          </VscodeTreeItem>
        </VscodeTreeItem>
      </VscodeTree>
    </div>
  );
}
