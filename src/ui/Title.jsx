/* eslint-disable react/prop-types */
import Heading from "./Heading";

function Title({children}) {
  return <Heading as="p1-b">{children}</Heading>;
}

export default Title;
