const personReducer = (person, action) => {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: name, title: title }],
      };
    }
    case "removed": {
      console.log(action);
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((item) => item.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
};

export default personReducer;
