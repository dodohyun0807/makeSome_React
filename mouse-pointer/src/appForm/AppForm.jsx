import React, { useState } from "react";

const AppFrom = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름 : </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChangeForm}
        />
        <label htmlFor="email">email : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeForm}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AppFrom;

// 리엑트는 상태의 변화로 컴포넌트가 랜더링되는 것인데, form데이터의 경우 그렇지 못하다.
// 그래서 리엑트에서 form 데이터를 사용할 떄, state를 on이벤트로 상태를 변경해가며 저장하고있다가
// 변경해주는 방식으로 접근한다.
