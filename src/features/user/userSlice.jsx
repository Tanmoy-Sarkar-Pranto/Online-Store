import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const themes = {
  nord: "nord",
  dracula: "dracula",
}

const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null
  return user
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.dracula
  document.documentElement.setAttribute("data-theme", theme)
  return theme
}

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt }
      console.log(user)
      state.user = user
      localStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem("user")
      toast.error("Logged out successfully")
    },
    themeToggle: (state) => {
      const { nord, dracula } = themes
      state.theme = state.theme === nord ? dracula : nord
      document.documentElement.setAttribute("data-theme", state.theme)
      localStorage.setItem("theme", state.theme)
    },
  },
})

export const { loginUser, logoutUser, themeToggle } = userSlice.actions

export default userSlice.reducer
