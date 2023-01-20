import Counter from "./Components/Counter";
import * as Sentry from "@sentry/react";
import TestError from "./Components/TestError";
import About from "./Components/About/About";
import DummyComponent from "./Components/dummyComponent";

function App() {
  return (
    <div>
      {/* Here , Counter is the dummy component for the reference */}
      <Counter />
      <About />
      <TestError />
      <DummyComponent />
    </div>
  );
}

export default Sentry.withProfiler(App);
