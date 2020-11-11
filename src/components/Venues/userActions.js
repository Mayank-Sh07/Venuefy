export default function reducer(state, { type, payload }) {
  switch (type) {
    case "OPEN-FILTER":
      return { ...state, isFilterOpen: true };

    case "CLOSE-FILTER":
      return { ...state, isFilterOpen: false };

    case "FILTER-SELECTED": {
      const selectTags = state.selectTags.map((item) => ({ ...item }));
      let found = false;
      selectTags.forEach((tag) => {
        if (tag.type === payload.type) {
          found = true;
          tag.label = payload.label;
          tag.resetVal = payload.resetVal;
        }
      });

      return {
        ...state,
        selectTags: found ? selectTags : [...state.selectTags, { ...payload }],
      };
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
        (key) =>
          (payload[key] === false || payload[key] === "Unspecified") &&
          delete payload[key]
      );
      let selectTags = Object.values(state.selectTags).filter(
        (tag) => tag.label !== "Unspecified"
      );
      return {
        ...state,
        tags: [...state.checkBoxTags, ...selectTags],
        filterParams: payload,
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

// export default function reducer(state, { type, payload }) {
//   switch (type) {
//     case "OPEN-FILTER":
//       return { ...state, isFilterOpen: true };

//     case "CLOSE-FILTER":
//       return { ...state, isFilterOpen: false };

//     case "CHECK-CHECKBOX": {
//       return { ...state, checkBoxTags: [...state.checkBoxTags, payload] };
//     }

//     case "UNCHECK-CHECKBOX": {
//       return {
//         ...state,
//         checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
//       };
//     }

//     case "FILTER-SELECTED": {
//       const selectTags = state.selectTags.map((item) => ({ ...item }));
//       let found = false;
//       selectTags.forEach((tag) => {
//         if (tag.type === payload.type) {
//           found = true;
//           tag.label = payload.label;
//           tag.resetVal = payload.resetVal;
//         }
//       });

//       return {
//         ...state,
//         selectTags: found
//           ? selectTags
//           : [
//               ...state.selectTags,
//               {
//                 label: payload.label,
//                 resetVal: payload.resetVal,
//                 type: payload.type,
//               },
//             ],
//       };
//     }

//     case "SUBMIT": {
//       Object.keys(payload).forEach(
//         (key) =>
//           (payload[key] === false || payload[key] === "Unspecified") &&
//           delete payload[key]
//       );
//       let str = "";
//       Object.keys(payload).forEach((k) => {
//         str += k + " : ";
//         str += String(payload[k]) + ",\n";
//       });
//       alert(str);
//       let selectTags = Object.values(state.selectTags).filter(
//         (tag) => tag.label !== "Unspecified"
//       );
//       return {
//         ...state,
//         tags: [...state.checkBoxTags, ...selectTags],
//       };
//     }

//     case "DELETE-TAG": {
//       return {
//         ...state,
//         tags: state.tags.filter((tag) => tag.label !== payload),
//         checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
//         selectTags: state.selectTags.filter((tag) => tag.label !== payload),
//       };
//     }

//     case "RESET": {
//       return {
//         ...state,
//         checkBoxTags: [],
//         selectTags: [],
//       };
//     }

//     default:
//       return state;
//   }
// }
