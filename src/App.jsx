import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import toast, { Toaster } from 'react-hot-toast';
import ButtonCounter from './testing/ButtonCounter'
import TestRecoilShared from './testing/TestRecoilShared'
import { RecoilRoot } from 'recoil';
// import TestRecoilShared from '@/testing/TestRecoilShared'

const notify = () => toast.success('Here is your toast.');

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
    <div className="App">
      <ButtonCounter/>
      
      <hr />
      <TestRecoilShared/>
      <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div></RecoilRoot>
  )
}

export default App
