import { connect } from "react-redux";

import CenterDiv from "@/src/components/CenterDiv";
import CountControls from "@/src/components/CountControls";
import { decrement, increment } from "@/src/redux/actions/counter";
import { IReduxStates } from "@/src/redux/configureStore";

const Page: React.FC = ({ dispatch, counter }: any) => {
  return (
    <>
      <CenterDiv>
        <h1>Hello World</h1>
      </CenterDiv>
      <div>{ counter.count }</div>
      <CountControls
        onIncrementClick={() => dispatch(increment())}
        onDecrementClick={() => dispatch(decrement())}
      />
    </>
  );
};

const mapStateToProps = ({ counter }: IReduxStates) => ({ counter });
export default connect(mapStateToProps)(Page);
