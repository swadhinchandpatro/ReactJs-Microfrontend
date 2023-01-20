import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import config from "./config";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StatePersist from "./utility/reduxStatePersist/statePersist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

Sentry.init({
  dsn: config.SENTRY_DSN,
  environment: process.env.REACT_APP_NODE_ENV,
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <StatePersist store={store}>
          <App />
        </StatePersist>
    </Provider>
  </React.StrictMode>
);
