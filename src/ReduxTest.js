import { useDispatch, useSelector } from 'react-redux'

function ReduxTest() {
  const test = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      니 몸무게 : {test}
      <button onClick={() => { dispatch({ type: '증가' }) }}>더하기</button>
    </div>
  );
}

export default ReduxTest;
