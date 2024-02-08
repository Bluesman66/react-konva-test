import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Konva Tests</h1>
        <nav>
          <ul>
            <li>
              <Link to={`tests/1`}>Test 1</Link>
            </li>
            <li>
              <Link to={`tests/2`}>Test 2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
