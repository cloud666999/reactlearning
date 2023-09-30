import React, { useEffect, useState } from 'react'

function ChildComponent({getData}) {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        // chúng ta đang gọi tới 1 function nằm bên ngoài useEffect này, --> cần đưa data vào dependency
        // để khi có sự thay đổi của getData ---> thực thi lại useEffect này , 1 useEffect sẽ được thực thi
        // khi component được mount  -> thực hiện việc gọi API thông qua method getData
        getData('comments')
        .then((res) => res.json())
        .then((res) => {
            const comments = res.data;
            setComments(comments);
        });
        // giả sử nếu dependency ở đây là trống thì chức năng của useCallBack cũng tương tự useMemo ---> ghi nhớ
        // 1 function trong bộ nhớ mà ko cần tạo mới khi app component được re render -> getData sẽ tham chiếu tới
        // nhiều ô nhớ khác nhau do kiểu dữ liệu javascript array là kiểu tham chiếu  nên mỗi lần render sẽ
        // là một mảng mới
    },[getData]);
    return (
    <div>
        <p>Child Component</p>
        <p>{JSON.stringify(comments)}</p>
    </div>
  )
}

export default ChildComponent
