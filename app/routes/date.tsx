import Flatpickr from "react-flatpickr";
import flatpickrCss from "flatpickr/dist/themes/airbnb.css?url";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: flatpickrCss }];
};

const DatePage = () => {
  return (
    <div>
      <p>
        If we got here by client side routing, the flatpickr input works fine.
        But if you refresh the page and trigger server rendering you get the
        following error
      </p>
      <pre>
        Error: Element type is invalid: expected a string (for built-in
        components) or a class/function (for composite components) but got:
        object.
      </pre>
      <label htmlFor="date-input">react-flatpickr input:</label>
      <Flatpickr id="date-input"></Flatpickr>
    </div>
  );
};

export default DatePage;
