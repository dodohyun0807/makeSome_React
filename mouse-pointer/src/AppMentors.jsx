import React, { useState } from "react";

export default function AppMentor() {
  const initialPerson = {
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  };
  const [person, setPerson] = useState(initialPerson);

  const handleClickChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((item) => ({
      ...item,
      mentors: item.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };

  const handleClickAdd = () => {
    const addMentor = prompt("추가할 멘토의 이름은?");
    const addTitle = prompt("추가할 멘토의 타이틀은?");
    setPerson((item) => ({
      ...item,
      mentors: [...item.mentors, { name: addMentor, title: addTitle }],
    }));
  };

  const handleClickRemove = () => {
    const removeMentor = prompt("삭제할 멘토의 이름은?");
    setPerson((item) => ({
      ...item,
      mentors: item.mentors.filter((name) => name.name !== removeMentor),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={() => handleClickChange()}>멘토의 이름을 바꾸기</button>
      <button onClick={() => handleClickAdd()}>멘토 추가하기</button>
      <button onClick={() => handleClickRemove()}>멘토 삭제하기</button>
    </div>
  );
}
