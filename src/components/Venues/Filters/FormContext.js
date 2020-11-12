import React from "react";
import { useForm } from "react-hook-form";

export const FormContext = React.createContext();

function reducer(state, { type, payload }) {
  switch (type) {
    case "OPEN-FILTER":
      return { ...state, isFilterOpen: true };

    case "CLOSE-FILTER":
      return { ...state, isFilterOpen: false };

    case "ITEM-SELECTED": {
      if (state.selectTags.length < 1)
        return { ...state, selectTags: [payload] };
      const selectTags = state.selectTags.map((tag) =>
        tag.name === payload.name ? { ...payload } : { ...tag }
      );
      return { ...state, selectTags: selectTags };
    }

    case "CHECK-CHECKBOX": {
      return { ...state, checkBoxTags: [...state.checkBoxTags, payload] };
    }

    case "UNCHECK-CHECKBOX": {
      return {
        ...state,
        checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
      };
    }

    case "RESET": {
      return { ...state, checkBoxTags: [], selectTags: [] };
    }

    case "SUBMIT": {
      Object.keys(payload).forEach(
        (key) => payload[key] === false && delete payload[key]
      );
      const GC = {};
      for (
        let indx = payload["Guest capacity"][0];
        indx <= payload["Guest capacity"][1];
        indx++
      ) {
        indx !== 0 ? (GC[`gc_${indx}`] = 1) : console.log();
      }
      delete payload["Guest capacity"];
      return {
        ...state,
        tags: [...state.checkBoxTags, ...state.selectTags],
        filterParams: { ...payload, ...GC },
      };
    }

    case "DELETE-TAG": {
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.label !== payload),
        checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
        selectTags: state.selectTags.filter((tag) => tag.label !== payload),
      };
    }

    default:
      return state;
  }
}

const FormContextProvider = ({ children }) => {
  const { control, reset, getValues, setValue } = useForm();
  const [state, dispatch] = React.useReducer(reducer, {
    isFilterOpen: Boolean(window.innerWidth > 1000),
    filterParams: {},
    tags: [],
    checkBoxTags: [],
    selectTags: [],
  });

  const { isFilterOpen, filterParams, tags } = state;
  const openFilter = () => dispatch({ type: "OPEN-FILTER" });
  const closeFilter = () => dispatch({ type: "CLOSE-FILTER" });
  const handleSelect = (event) => {
    if (!!event.target && event.target.value !== false) {
      dispatch({
        type: "ITEM-SELECTED",
        payload: { name: event.target.name, label: event.target.value },
      });
    }
  };

  const handleCheckbox = (event, tag) => {
    event.target.checked
      ? dispatch({
          type: "CHECK-CHECKBOX",
          payload: { name: tag.name, label: tag.label },
        })
      : dispatch({ type: "UNCHECK-CHECKBOX", payload: tag.label });
  };

  const handleReset = () => {
    reset({
      air_cond: false,
      bnqt_hl: false,
      cat_1: false,
      cat_2: false,
      chng_rms: false,
      dec_1: false,
      dec_2: false,
      hotl_bnqt: false,
      location: false,
      mea: false,
      perm_1: false,
      perm_2: false,
      perm_3: false,
      perm_4: false,
      perm_5: false,
      perm_6: false,
      pt_1: false,
      pt_2: false,
      pt_3: false,
      pt_4: false,
      pt_5: false,
      pt_valet: false,
      rsrt: false,
      st_1: false,
      st_2: false,
      st_3: false,
      st_4: false,
      st_5: false,
      veg_only: false,
      venuefied: false,
    });
    dispatch({ type: "RESET" });
  };

  const handleSubmit = () => dispatch({ type: "SUBMIT", payload: getValues() });

  const deleteTag = (tag) => {
    setValue(tag.name, false);
    dispatch({ type: "DELETE-TAG", payload: tag.label });
    dispatch({ type: "SUBMIT", payload: getValues() });
  };

  return (
    <FormContext.Provider
      value={{
        control,
        isFilterOpen,
        filterParams,
        tags,
        openFilter,
        closeFilter,
        deleteTag,
        handleCheckbox,
        handleSelect,
        handleReset,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
