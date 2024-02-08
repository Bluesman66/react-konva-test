import { useParams } from "react-router-dom";

type TParams = {
  testId: string;
};

const Test = () => {
  const { testId } = useParams<TParams>();
  return <div>{`Test ${testId}`}</div>;
};

export default Test;
