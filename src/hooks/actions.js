import {CHANGE_MODAL, NEW_QUESTION, CHOOSE_OPTION, CHANGE_SCORE, VISIT_OPTION} from "../hooks/types"

const toggleModal = () => ({
  type: CHANGE_MODAL
});

const changeQuestion = (question) => ({
  type: NEW_QUESTION,
  payload: {
    question
  },
});

const changeScore = (score=0) => ({
  type: CHANGE_SCORE,
  payload: {
    score: parseInt(score)
  },
});

const visitOption = (app) => ({
  type: VISIT_OPTION,
  payload: {
    app
  },
});

const chooseOption = (option) => ({
    type: CHOOSE_OPTION,
    payload: {
      option
    },
  });

  export {
    toggleModal,
    changeQuestion,
    visitOption,
    chooseOption,
    changeScore
  }
