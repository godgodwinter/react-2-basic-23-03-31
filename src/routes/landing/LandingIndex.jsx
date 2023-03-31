import toast, { Toaster } from "react-hot-toast";
const notify = () => toast.success("Here is your toast.");
export default function LandingIndex() {
  return (
    <>
      <Toaster />
      <div>
        <button className="btn btn-active" onClick={notify}>
          Toast Me
        </button>
      </div>
      <button className="btn btn-active">Button</button>
      <button className="btn btn-active btn-primary">Button</button>
      <button className="btn btn-active btn-secondary">Button</button>
      <button className="btn btn-active btn-accent">Button</button>
      <button className="btn btn-active btn-ghost">Button</button>
      <button className="btn btn-active btn-link">Button</button>
    </>
  );
}
