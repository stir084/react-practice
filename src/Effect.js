import {useState, useEffect} from "react";

function Test(){
    useEffect(() => {
        console.log("나도 한번만 실행돼요.(대신 다시 그려질 때도 실행돼요)");
        return () => { console.log("나는 없어질 때 실행돼요. (대신 다시 그려질 때도 실행돼요 Test가 다시 그려지기 때문이죠.)")}
    })
    return(
        <div>
            <h2>Effect 테스트 입니다. 콘솔로 확인하세요~.</h2>
        </div>
    );
}
function Effect() {
    const [btn, setBtn] = useState(true);
    const [value, setValue] = useState(0);
    const onClick = () => setBtn((prev) => !prev);
    
    const onChange = (event) => {
        setValue((current) => event.target.value);
    }
    useEffect(() => {
        console.log("나는 딱 한번만","실행 돼요");
    }, [])
    // useEffect(() => {
    //     console.log("나는 value값이 바뀔 때 마다 실행돼요.");
    // }, [value])
    return (
        <div>
            <div>
                {btn ? <Test/> : null}
            </div>
            <div>
                <input onChange={onChange} value={value} placeholder="type anyword"/>
            </div>
            <div>
                <button onClick={onClick}>{btn ? "hide" : "Show"}</button>
            </div>
        </div>
    );
}

export default Effect;
