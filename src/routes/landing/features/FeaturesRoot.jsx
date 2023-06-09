import { Outlet, NavLink } from "react-router-dom";
export default function FeaturesRoot() {
  return (
    <>
      <div className="flex justify-center space-x-4 border-solid border-2 border-slate-200">
        <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
          <div className="flex gap-1 items-center">
            <svg
              width="19"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
            </svg>
            <NavLink
              to="/features/toast"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <span className="font-bold">Toast : react-hot-toast</span>
            </NavLink>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              width="19"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
            </svg>
            <span className="font-bold">Router : ReactRouter</span>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              width="19"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
            </svg>
            <span className="font-bold">State Management : Recoil</span>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              width="19"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
            </svg>
            <span className="font-bold">CSS : TailwindCss</span>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              width="19"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
            </svg>
            <NavLink
              to="/features/moment"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <span className="font-bold">Datetime : Momentjs</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div id="detail">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
