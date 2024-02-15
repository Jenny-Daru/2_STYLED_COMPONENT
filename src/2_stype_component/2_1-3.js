import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box속성을 상속받아 사용 
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// attrs를 사용하여 속성을 포함 시킬 수 있음 
const Input = styled.input.attrs({required:true})`
  background-color: khaki;
`;

/* 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때 
   as를 사용하여 HTML 부분 태그를 변경 할 수 있음 
   - 뭔가 추가할 계획이 없어을때 
   - 컴포넌트를 확장하고 싶지 않을때 
*/

function App() {
  return (
    <Father as="header" >
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
