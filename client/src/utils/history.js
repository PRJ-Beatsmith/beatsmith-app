import { createBrowserHistory } from "history";
import process from "process";

export default createBrowserHistory({ basename: `${process.env.PUBLIC_URL}` });
