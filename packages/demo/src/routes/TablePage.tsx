import {
  VscodeTable,
  VscodeTableHeader,
  VscodeTableHeaderCell,
  VscodeTableBody,
  VscodeTableRow,
  VscodeTableCell,
} from "@vscode-elements/react-elements";

export default function TablePage() {
  return (
    <div>
      <h1>Table</h1>
      <VscodeTable zebra>
        <VscodeTableHeader>
          <VscodeTableHeaderCell>First name</VscodeTableHeaderCell>
          <VscodeTableHeaderCell>Last name</VscodeTableHeaderCell>
          <VscodeTableHeaderCell>E-mail</VscodeTableHeaderCell>
        </VscodeTableHeader>
        <VscodeTableBody>
          <VscodeTableRow>
            <VscodeTableCell>Vincenza</VscodeTableCell>
            <VscodeTableCell>Lindgren</VscodeTableCell>
            <VscodeTableCell>Delia21@yahoo.com</VscodeTableCell>
          </VscodeTableRow>
          <VscodeTableRow>
            <VscodeTableCell>Vincenza</VscodeTableCell>
            <VscodeTableCell>Lindgren</VscodeTableCell>
            <VscodeTableCell>Delia21@yahoo.com</VscodeTableCell>
          </VscodeTableRow>
          <VscodeTableRow>
            <VscodeTableCell>Vincenza</VscodeTableCell>
            <VscodeTableCell>Lindgren</VscodeTableCell>
            <VscodeTableCell>Delia21@yahoo.com</VscodeTableCell>
          </VscodeTableRow>
        </VscodeTableBody>
      </VscodeTable>
    </div>
  );
}
