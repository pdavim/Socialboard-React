const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "blah blah blah",
      image:
        "https://images.pexels.com/photos/2703519/pexels-photo-2703519.jpeg"
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "blah blah blah",
      image:
        "https://images.pexels.com/photos/2892253/pexels-photo-2892253.jpeg"
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content: "blah blah blah",
      image:
        "https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg"
    }
  ]
};

const projecReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    case "DELETE_PROJECT":
      console.log("deleted project", action.project);
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("deleted project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projecReducer;
