import { useEffect } from "react";
import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  useNavigation,
  useSubmit,
} from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
}

export async function action() {}

export default function LandingRoot() {
  const navigation = useNavigation();

  return (
    <>
      <div class="navbar bg-base-100 px-2 md:px-10 shadow-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={`cv`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <p>CV</p>
                  <span>★</span>
                </NavLink>

                <NavLink
                  to={`projects`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <p>PROJECTS</p>
                  <span>★</span>
                </NavLink>

                <NavLink
                  to={`skills`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <p>SKILLS</p>
                  <span>★</span>
                </NavLink>
                <NavLink
                  to={`features`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <p>FEATURES</p>
                  <span>★</span>
                </NavLink>
                <NavLink
                  to={`progress`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <p>PROGRESS</p>
                  <span>★</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl font-bold">BABENG</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={`cv`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <p>CV</p>
                <span>★</span>
              </NavLink>

              <NavLink
                to={`projects`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <p>PROJECTS</p>
                <span>★</span>
              </NavLink>

              <NavLink
                to={`skills`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <p>SKILLS</p>
                <span>★</span>
              </NavLink>
              <NavLink
                to={`features`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <p>FEATURES</p>
                <span>★</span>
              </NavLink>
              <NavLink
                to={`progress`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <p>PROGRESS</p>
                {/* <span>★</span> */}
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://github.com/godgodwinter/react-2-basic-23-03-31"
            target="blank"
            className="btn"
          >
            React ^18.2.0
          </a>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
