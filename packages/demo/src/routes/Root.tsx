import React from "react";
import { Outlet } from "react-router-dom";
import "./Root.css";

export default function Root() {
  return (
    <div className="Root">
      <aside>
        <ul>
          <li>
            <a href="/badge">Badge</a>
          </li>
          <li>
            <a href="/button">Button</a>
          </li>
          <li>
            <a href="/checkbox">Checkbox</a>
          </li>
          <li>
            <a href="/multi-select">Multi Select</a>
          </li>
          <li>
            <a href="/radio">Radio</a>
          </li>
          <li>
            <a href="/single-select">Single Select</a>
          </li>
          <li>
            <a href="/split-layout">Split Layout</a>
          </li>
          <li>
            <a href="/table">Table</a>
          </li>
          <li>
            <a href="/textarea">Textarea</a>
          </li>
          <li>
            <a href="/textfield">Textfield</a>
          </li>
          <li>
            <a href="/tree">Tree</a>
          </li>
        </ul>
      </aside>
      <main>
        <p>React version: {React.version}</p>
        <Outlet />
      </main>
    </div>
  );
}
