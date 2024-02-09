import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import HumanEditor from "../components/HumanEditor/HumanEditor";

type TParams = {
  testId: string;
};

const Test = () => {
  const { testId } = useParams<TParams>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("height", ref.current?.offsetHeight);
    console.log("width", ref.current?.offsetWidth);
  }, []);

  return (
    <div style={{ height: "100%" }} ref={ref}>
      <HumanEditor width={ref.current?.offsetWidth ?? 0} height={ref.current?.offsetHeight ?? 0} />
    </div>
  );
};

export default Test;
