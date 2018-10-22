export function toggle(state, name) {
  let val = state[name];
  return { [name]: !val };
}
