const initial = {
  categories: [],
};
export default function categoryReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case 'hok':
      return 'hai';
    default:
      return state;
  }
}
