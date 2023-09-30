import React from "react";

function ChildComponentReactMemo({ name }) {
  console.log("im render again");
  // lý do đoạn text này bị render lại là do component cha được render lại -> component con bị render theo
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
}

// về hiệu năng giả sử nếu trong đây là khối code phức tạp nên sẽ render lại những thứ ko cần thiết
// --> React.Memo , khi ta bọc  component con vào trong React.Memo , nó sẽ  ghi nhớ component này  ->
// và chỉ render lại component con này khi có sự thay đổi  của props được truyền từ component cha

// lưu ý React.memo sẽ hoạt động tốt nếu props được truyền là number, string  , boolean
// tham số thứ 1 component, tham số thứ 2 là 1 function có nhiệm vụ custom việc so sánh các props trước đó
// và props hiện tại bằng việc sử dụng  shallowCompare  (so sánh nông)

 
// export default React.memo(ChildComponentReactMemo,(prevProp, nextProp) => {
//   // đây là 1 dạng custom comparison trả về là true nếu như ta muốn bỏ qua việc render lại ChildComponentReactMemo,
//   // ngược lại nếu custom comparison trả về là false ---> tiến hành re-render lại  ChildComponentReactMemo

//   return prevProp.name === nextProp.name;
// });

// Khuyến cáo chỉ nên sử dụng React.memo với các component hay bị render lại mà props ko thay đổi
// đây là comparison mặc định của React.memo
export default React.memo(ChildComponentReactMemo);