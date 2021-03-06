let initialState = {
  color: "white",
  name: "",
  email: "",
  phone: "",
  headline: "",
  address: "",
  github: "",
  linkedin: "",
  website: "",
  skills: "",
  project: "",
  tech:"",
  education: [],
  exp: []
};

function Resume(state = initialState, action) {
  switch (action.type) {
    case "ADD_COLOR":
      return {
        ...state,
        color: action.payload
      };
    case "ADD_HEADLINE":
      return {
        ...state,
        headline: action.payload
      };
    case "ADD_EXP":
      console.log(state.exp);
      let exp = [...state.exp, action.payload];
      return {
        ...state,
        exp
      };
    case "ADD_EDU":
      let education = [...state.education, action.payload];
      return {
        ...state,
        education
      };
    case "ADD_GITHUB":
      return {
        ...state,
        github: action.payload
      };
   
    case "ADD_WEBSITE":
      return {
        ...state,
        website: action.payload
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "ADD_PHONE":
      return {
        ...state,
        phone: action.payload
      };
    case "ADD_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "ADD_LINKEDIN":
      return {
        ...state,
        linkedin: action.payload
      };
    case "CHANGE_EXP":
      let changedExp = state.exp;
      changedExp[action.payload.index][action.payload.property] =
        action.payload.value;
      console.log(changedExp);
      return {
        ...state,
        exp: changedExp
      };
    case "CHANGE_EDU":
      let changedEducation = state.education;
      changedEducation[action.payload.index][action.payload.property] =
        action.payload.value;
      return {
        ...state,
        education: changedEducation
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: action.payload
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        address: action.payload
      };
    case "ADD_PROJECT":
      return {
        ...state,
        project: action.payload
      };
      case "ADD_TECH":
        return {
          ...state,
           tech: action.payload
        };
    default:
      return state;
  }
}

export default Resume;
