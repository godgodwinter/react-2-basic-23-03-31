export default function LandingIndex() {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <article class="prose">
              <div className="py-10">
                <p>Hello there, Im</p>
                <h1>KUKUH SETYA NUGRAHA</h1>
                <h3>FULLSTACK WEB DEVELOPER</h3>
              </div>
              {/* <div>
                <p>from</p>
                <h4>Indonesia </h4>
              </div> */}
              <button class="btn btn-primary">Hire Me</button>
            </article>
          </div>
        </div>
      </div>
      {/* <Toaster position="top-right" reverseOrder={false} />
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
      <button className="btn btn-active btn-link">Button</button> */}
    </>
  );
}
