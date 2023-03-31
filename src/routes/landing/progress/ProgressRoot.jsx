import { Outlet, NavLink } from "react-router-dom";
export default function ProgressRoot() {
  return (
    <>
      <div className="flex justify-center space-x-4 border-solid border-2 border-slate-200">
        <div class="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
          <div class="flex gap-1 items-center">
            ❌ DataTable : react-data-table-component
          </div>
          <div class="flex gap-1 items-center">❌ Datetime : Momentjs</div>
          <div class="flex gap-1 items-center">❌ Form : formik</div>
          <div class="flex gap-1 items-center">❌ Query : Tanstack Query</div>
          <div class="flex gap-1 items-center">❌ Chart</div>
          <div class="flex gap-1 items-center">❌ Motion : framer</div>
          <div class="flex gap-1 items-center">❌ PDF Generator</div>
          <div class="flex gap-1 items-center">❌ PDF Viewer</div>

          <div class="flex gap-1 items-center">❌ Import Excel</div>
          <div class="flex gap-1 items-center">❌ Datetime Picker</div>
          <div class="flex gap-1 items-center">❌ Select with Search</div>
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
