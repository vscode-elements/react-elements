import { Outlet } from "react-router-dom";
import "./Root.css";

export default function Root() {
  return (
    <div className="Root">
      <aside>
        <ul>
          <li><a href="/badge">Badge</a></li>
          <li><a href="/checkbox">Checkbox</a></li>
          <li><a href="/radio">Radio</a></li>
          <li><a href="/single-select">Single Select</a></li>
        </ul>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
