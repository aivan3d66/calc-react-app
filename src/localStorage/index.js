const KEY = 'state'

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (!serializedState) return undefined
    const state = JSON.parse(serializedState)
    state.user = { isLoading: true }
    return state
  } catch (e) {
    return undefined
  }
}

export async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (error) {
    // Ignore
  }
}
