import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

// this is where we reference the adapter package we installed
// earlier
// This sets up the adapter to be used by Enzyme
configure({ adapter: new Adapter() });
