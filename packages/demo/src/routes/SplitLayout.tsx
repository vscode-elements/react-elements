import { VscodeSplitLayout } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function SplitLayoutPage() {
  return (
    <div>
      <h1>Split Layout</h1>
      <VscodeSplitLayout
        style={{ width: "500px", height: "500px" }}
        onVscSplitLayoutChange={logEvents}
      >
        <div
          slot="start"
          style={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
          }}
        >
          start
        </div>
        <div
          slot="end"
          style={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
          }}
        >
          end
        </div>
      </VscodeSplitLayout>
    </div>
  );
}
