export const snippets = [
  {
    id: "cEhH81PU",
    title: "Loading Button in React",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1674492711066,
    folderId: "LgoHnq8u",
    updatedAt: 1675023452045,
    tabs: [
      {
        id: 0,
        title: "Loader.js",
        content:
          'import React from "react";\nimport \'./Loader.css\'\n\nfunction Loader(){\n    return <div className="modal">\n            <div className="loader"></div>\n        </div>\n}\n\nexport default Loader;\n\n\n',
      },
      {
        id: 1,
        title: "Loader.css",
        content:
          ".modal{\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.loader {\n    margin: 10% 45%;\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #2980B9;\n    border-right: 16px solid #2ECC71;\n    border-bottom: 16px solid #e62020;\n    border-left: 16px solid #f5ba1a;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n  \n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}",
      },
    ],
  },
  {
    id: "UKeDBX1j",
    title: "Redirecting to new page after login",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1674727551337,
    folderId: "LgoHnq8u",
    updatedAt: 1675023399942,
    tabs: [
      {
        id: 0,
        title: "Server.js",
        content:
          "import { Link, useNavigate } from 'react-router-dom'\n\n  const [redirect, setRedirect] = useState(false)\n const navigate = useNavigate()\n \n   setRedirect(true)\n   \n      if (redirect) {\n        navigate(\"/\")\n      }",
      },
      {
        id: 1,
        title: "Untitled fragment",
        content: "",
      },
    ],
  },
  {
    id: "-tt9mjjS",
    title:
      "setting token as cookies on response http , reading token from http cookies header to verify user",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1674915687466,
    folderId: "O0EvGsDA",
    updatedAt: 1675023440328,
    tabs: [
      {
        id: 0,
        title: "server.js",
        content:
          "//sending coookie to user or client after login confirm using http\n\nres.cookie('token', token, { sameSite: 'Strict', httpOnly: true, secure: true });\n\n\n\n// reading cookie for subsequent request on server side \n\nconst token = req.cookies.token;\n\n\n// you can do this work in middleware\n\n",
      },
      {
        id: 1,
        title: "JWT Authentication using cookies",
        content:
          "// generating jwt token \n\napp.post('/login', async (req, res) => {\n    const { email, password } = req.body\n    try {\n        const user = await User.findOne({ email: email })\n        if (user) {\n            const match = await bcrypt.compare(password, user.password);\n            if (match) {\n             \n             // creating jwt token\n           const token = jwt.sign({ email: user.email, id: user._id }, jwtSecretKey)\n            \n            res.cookie('token', token,{ sameSite: 'none', httpOnly: true, secure: true });\n                res.status(200).json(user);\n            }\n            else {\n                return res.status(401).json(\"wrong password\")\n            }\n        }\n        else {\n            res.status(401).json('Not found any User with given email')\n        }\n\n    } catch (err) {\n        console.log('this ran')\n        res.json(err)\n    }\n\n})\n\n\n\n\n// reading or verifying jwt token from request \n\napp.get('/profile', async (req, res) => {\n    const token = req.cookies.token;\n    try {\n        jwt.verify(token, jwtSecretKey, {},async (err, userData) => {\n            if (err) throw err;\n            const user = await User.findById(userData.id)\n            const {name, email, id} = user \n            return res.json({name,email,id})\n        })\n\n    } catch (err) {\n        res.json(err)\n    }\n\n})\n",
      },
    ],
  },
  {
    id: "vCGVghfd",
    title: "tabs switching after clicking",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1674999280942,
    folderId: "SwR4oUrD",
    updatedAt: 1676271449505,
    tabs: [
      {
        id: 0,
        title: "index.html",
        content:
          '<div id="tabbed-content">\n\t\t\t<ul class="tabs">\n\t\t\t  <li data-target="#about" >About</li>\n\t\t\t  <li data-target="#contact">Contact</li>\n\t\t\t</ul>\n\t\t\t<div class="panel active" id="about">\n\t\t\t  <p>Content for about tab...</p>\n\t\t\t  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc porta urna ornare rhoncus. Ut convallis ante at.</p>\n\t\t\t</div>\n\t\t\t<div class="panel" id="contact">\n\t\t\t  <p>Content for contact tab...</p>\n\t\t\t  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc porta urna ornare rhoncus. Ut convallis ante at.</p>\n\t\t\t</div>\n\t\t  </div>',
      },
      {
        id: 1,
        title: "app.js",
        content:
          "\nconst tabs = document.querySelector('.tabs')\nconst pannels = document.querySelectorAll('.panel')\n\n\ntabs.addEventListener('click', (e) => {\n    if (e.target.tagName == 'LI') {\n        const activePannel = document.querySelector(e.target.dataset.target)\n        pannels.forEach(pannel => {\n            if (activePannel == pannel) {\n                pannel.classList.add('active')\n            } else {\n                pannel.classList.remove('active'\n            }\n\n        })\n    }\n})",
      },
      {
        id: 2,
        title: "styles.css",
        content:
          "#tabbed-content li{\n    display: inline-block;\n    padding: 10px 14px;\n    background: #ddd;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-right: 10px;\n}\n\n#tabbed-content .panel{\n    display: none;\n    border: 1px solid #ddd;\n    padding: 0 10px;\n    border-radius: 4px;\n}\n\n#tabbed-content .active{\n    display: block;\n}",
      },
    ],
  },
  {
    id: "YnzVQBq_",
    title:
      "storing user's email and hashed password using  bcrypt and mongoose model ",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675001464260,
    folderId: "T7aO33JL",
    updatedAt: 1675023413473,
    tabs: [
      {
        id: 0,
        title: "UserModel.js",
        content:
          "const mongoose = require('mongoose')\nconst Schema = mongoose.Schema\nconst validator = require('validator')\nconst bcrypt = require('bcrypt')\n\nconst userSchema = new Schema({\n    email: {\n        type: String,\n        require: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n})\n\n// static signup method\n\nuserSchema.statics.signup = async function (email, password) {\n\n    // validation \n    if (!email || !password) {\n        throw Error('All fields must be filled')\n    }\n    if (!validator.isEmail(email)) {\n        throw Error(\"Email is not valid\")\n    }\n    if (!validator.isStrongPassword(password)) {\n        throw Error('Password not strong enough')\n    }\n\n    const exists = await this.findOne({ email })\n    if (exists) {\n        throw Error(\"email already in use\")\n    }\n\n    // generates a salt\n    //  A salt is a random string that is used as an additional input to the hash function\n    // The purpose of the salt is to make it more difficult to guess the original password by adding randomness to the hash.\n    \n    const salt = await bcrypt.genSalt(10)\n\n    const hash = await bcrypt.hash(password, salt)\n\n    const user = await this.create({ email, password: hash })\n\n    return user\n}\n\n// static login method \n\nuserSchema.statics.login = async function (email, password) {\n    // validation \n    if (!email || !password) {\n        throw Error('All fields must be filled')\n    }\n    const user = await this.findOne({ email })\n    if (!user) {\n        throw Error('Incorrect Email')\n    }\n    const match = await bcrypt.compare(password, user.password)\n    if (!match) {\n        throw Error('Incorrect password')\n    }\n    return user\n}\n\nmodule.exports = mongoose.model('User', userSchema)\n\n\n\n\n",
      },
      {
        id: 1,
        title: "userController.js",
        content:
          "const User = require('../model/userModel')\n\nconst jwt = require('jsonwebtoken')\n\nconst createToken = (_id) => {\n return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})\n}\n\nconst loginUser = async (req, res) => {\n\n    const { email, password } = req.body\n    \n    try {\n    \n        const user = await User.login(email, password)\n\n        // create a Token\n        const token = createToken(user._id)\n        res.status(200).json({ email, token })\n\n    }\n    catch(error)\n    {\n        res.status(400).json({ error: error.message })\n    }\n}\n\n\nconst signupUser = async (req, res) => {\n    const { email, password } = req.body\n    try {\n        // using the userSchema static method\n        const user = await User.signup(email, password)\n\n        \n        // create a Token\n        const token = createToken(user._id)\n        \n        res.status(200).json({ email, token })\n\n    }\n    catch(error)\n    {\n        res.status(400).json({ error: error.message })\n    }\n}\n\n\nmodule.exports = {\n    loginUser,\n    signupUser\n}",
      },
    ],
  },
  {
    id: "Isi4VksM",
    title: "Auth Context for props and useReducer for managing state for React",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675022504977,
    folderId: "LgoHnq8u",
    updatedAt: 1675172835734,
    tabs: [
      {
        id: 0,
        title: "AuthContext.js",
        content:
          "import { createContext, useReducer, useEffect } from 'react'\n\nexport const AuthContext = createContext()\n\nexport const authReducer = (state, action) => {\n  switch (action.type) {\n    case 'LOGIN':\n      return { user: action.payload }\n    case 'LOGOUT':\n      return { user: null }\n    default:\n      return state\n  }\n}\n\nexport const AuthContextProvider = ({ children }) => {\n  const [state, dispatch] = useReducer(authReducer, { \n    user: null\n  })\n\n  useEffect(()=> {\n    const user = JSON.parse(localStorage.getItem('user'))\n    if(user){\n      dispatch({type:'LOGIN', payload:user})\n    }\n},[])\n\n  \n  return (\n    <AuthContext.Provider value={{ ...state, dispatch }}>\n      { children }\n    </AuthContext.Provider>\n  )\n\n}",
      },
      {
        id: 1,
        title: "useAuthContext",
        content:
          'import { AuthContext } from "../context/AuthContext"\nimport { useContext } from "react"\n\nexport const useAuthContext = () => {\n  const context = useContext(AuthContext)\n\n  \n\n  if(!context) {\n    throw Error(\'useAuthContext must be used inside an AuthContextProvider\')\n  }\n\n  return context\n}',
      },
      {
        id: 2,
        title: "consuming context",
        content:
          "import { useAuthContext } from './hooks/useAuthContext';\n\n const {user } = useAuthContext()",
      },
    ],
  },
  {
    id: "P4RbVwbW",
    title: "login  page functionality in react ",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675022809888,
    folderId: "LgoHnq8u",
    updatedAt: 1676398969389,
    tabs: [
      {
        id: 0,
        title: "loginpage.js",
        content:
          'import { useState } from "react"\nimport { useLogin } from "../hooks/useLogin"\n\n\nconst Login = () => {\n  const [email, setEmail] = useState(\'\')\n  const [password, setPassword] = useState(\'\')\n  const {login, isLoading, error} = useLogin()\n  const handleSubmit = async (e) => {\n    e.preventDefault()\n    await login(email, password)\n  }\n\n  return (\n    <form className="login" onSubmit={handleSubmit}>\n      <h3>Log In</h3>\n      \n      <label>Email address:</label>\n      <input \n        type="email" \n        onChange={(e) => setEmail(e.target.value)} \n        value={email} \n      />\n      <label>Password:</label>\n      <input \n        type="password" \n        onChange={(e) => setPassword(e.target.value)} \n        value={password} \n      />\n\n      <button disabled={isLoading}>Log in</button>\n      {error && <div className="error">{error}</div>}\n    </form>\n  )\n}\n\nexport default Login',
      },
      {
        id: 1,
        title: "useLogin.js",
        content:
          "import { useState } from 'react'\nimport { useAuthContext } from './useAuthContext'\n\nexport const useLogin = () => {\n  const [error, setError] = useState(null)\n  const [isLoading, setIsLoading] = useState(null)\n  const { dispatch } = useAuthContext()\n\n  const login = async (email, password) => {\n    setIsLoading(true)\n    setError(null)\n\n    const response = await fetch('/api/user/login', {\n      method: 'POST',\n      headers: {'Content-Type': 'application/json'},\n      body: JSON.stringify({ email, password })\n    })\n    const json = await response.json()\n\n    if (!response.ok) {\n      setIsLoading(false)\n      setError(json.error)\n    }\n    if (response.ok) {\n      // save the user to local storage\n      localStorage.setItem('user', JSON.stringify(json))\n\n      // update the auth context\n      dispatch({type: 'LOGIN', payload: json})\n\n      // update loading state\n      setIsLoading(false)\n    }\n  }\n\n  return { login, isLoading, error }\n}",
      },
      {
        id: 2,
        title: "login.css",
        content:
          '/* google font */\n@import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap\');\n\n/* layout */\n:root {\n  --primary: #1aac83;\n  --error: #e7195a;\n}\nbody {\n  background: #f1f1f1;\n  margin: 0;\n  font-family: "Poppins";\n}\nheader {\n  background: #fff;\n}\nheader .container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nheader a {\n  color: #333;\n  text-decoration: none;\n}\n.pages{\n  max-width: 1400px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n/* homepage */\n.home {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  gap: 100px;\n}\n.workout-details {\n  background: #fff;\n  border-radius: 4px;\n  margin: 20px auto;\n  padding: 20px;\n  position: relative;\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);\n}\n.workout-details h4 {\n  margin: 0 0 10px 0;\n  font-size: 1.2em;\n  color: var(--primary);\n}\n.workout-details p {\n  margin: 0;\n  font-size: 0.9em;\n  color: #555;\n}\n.workout-details span {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n  background: #f1f1f1;\n  padding: 6px;\n  border-radius: 50%;\n  color: #333;\n}\n\n/* new workout form */\nlabel, input {\n  display: block;\n}\ninput {\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\nform button {\n  background: var(--primary);\n  border: 0;\n  color: #fff;\n  padding: 10px;\n  font-family: "Poppins";\n  border-radius: 4px;\n  cursor: pointer;\n}\ndiv.error {\n  padding: 10px;\n  background: #ffefef;\n  border: 1px solid var(--error);\n  color: var(--error);\n  border-radius: 4px;\n  margin: 20px 0;\n}\ninput.error {\n  border: 1px solid var(--error);\n}\n\n/* auth forms */\nform.signup, form.login {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 4px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n}\nnav a {\n  margin-left: 10px;\n}\n\nnav button {\n  background: #fff;\n  color: var(--primary);\n  border: 2px solid var(--primary);\n  padding: 6px 10px;\n  border-radius: 4px;\n  font-family: "Poppins";\n  cursor: pointer;\n  font-size: 1em;\n  margin-left: 1em;\n}\n\n/* auth forms */\nform.signup, form.login {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 4px;\n}',
      },
    ],
  },
  {
    id: "mx7fJUJq",
    title: "SignIn or SignUp functionalities",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675023021637,
    folderId: "LgoHnq8u",
    updatedAt: 1675024598100,
    tabs: [
      {
        id: 0,
        title: "signInPage.js",
        content:
          'import { useState } from "react"\nimport { useSignup } from "../hooks/useSignup"\n\nconst Signup = () => {\n  const [email, setEmail] = useState(\'\')\n  const [password, setPassword] = useState(\'\')\n  const {signup, error, isLoading} = useSignup()\n\n  const handleSubmit = async (e) => {\n    e.preventDefault()\n    await signup(email, password)\n  }\n\n  return (\n    <form className="signup" onSubmit={handleSubmit}>\n      <h3>Sign Up</h3>\n      \n      <label>Email address:</label>\n      <input \n        type="email" \n        onChange={(e) => setEmail(e.target.value)} \n        value={email} \n      />\n      <label>Password:</label>\n      <input \n        type="password" \n        onChange={(e) => setPassword(e.target.value)} \n        value={password} \n      />\n\n      <button disabled={isLoading}>Sign up</button>\n      {error && <div className="error">{error}</div>}\n    </form>\n  )\n}\n\nexport default Signup',
      },
      {
        id: 1,
        title: "useSignup",
        content:
          "import { useState } from 'react'\nimport { useAuthContext } from './useAuthContext'\n\nexport const useSignup = () => {\n  const [error, setError] = useState(null)\n  const [isLoading, setIsLoading] = useState(null)\n  const { dispatch } = useAuthContext()\n\n  const signup = async (email, password) => {\n    setIsLoading(true)\n    setError(null)\n\n    const response = await fetch('/api/user/signup', {\n      method: 'POST',\n      headers: {'Content-Type': 'application/json'},\n      body: JSON.stringify({ email, password })\n    })\n    const json = await response.json()\n\n    if (!response.ok) {\n      setIsLoading(false)\n      setError(json.error)\n    }\n    if (response.ok) {\n      // save the user to local storage\n      localStorage.setItem('user', JSON.stringify(json))\n\n      // update the auth context\n      dispatch({type: 'LOGIN', payload: json})\n\n      // update loading state\n      setIsLoading(false)\n    }\n  }\n\n  return { signup, isLoading, error }\n}",
      },
      {
        id: 2,
        title: "login.css",
        content:
          '/* google font */\n@import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap\');\n\n/* layout */\n:root {\n  --primary: #1aac83;\n  --error: #e7195a;\n}\nbody {\n  background: #f1f1f1;\n  margin: 0;\n  font-family: "Poppins";\n}\nheader {\n  background: #fff;\n}\nheader .container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nheader a {\n  color: #333;\n  text-decoration: none;\n}\n.pages{\n  max-width: 1400px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n/* homepage */\n.home {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  gap: 100px;\n}\n.workout-details {\n  background: #fff;\n  border-radius: 4px;\n  margin: 20px auto;\n  padding: 20px;\n  position: relative;\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);\n}\n.workout-details h4 {\n  margin: 0 0 10px 0;\n  font-size: 1.2em;\n  color: var(--primary);\n}\n.workout-details p {\n  margin: 0;\n  font-size: 0.9em;\n  color: #555;\n}\n.workout-details span {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n  background: #f1f1f1;\n  padding: 6px;\n  border-radius: 50%;\n  color: #333;\n}\n\n/* new workout form */\nlabel, input {\n  display: block;\n}\ninput {\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\nform button {\n  background: var(--primary);\n  border: 0;\n  color: #fff;\n  padding: 10px;\n  font-family: "Poppins";\n  border-radius: 4px;\n  cursor: pointer;\n}\ndiv.error {\n  padding: 10px;\n  background: #ffefef;\n  border: 1px solid var(--error);\n  color: var(--error);\n  border-radius: 4px;\n  margin: 20px 0;\n}\ninput.error {\n  border: 1px solid var(--error);\n}\n\n/* auth forms */\nform.signup, form.login {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 4px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n}\nnav a {\n  margin-left: 10px;\n}\n\nnav button {\n  background: #fff;\n  color: var(--primary);\n  border: 2px solid var(--primary);\n  padding: 6px 10px;\n  border-radius: 4px;\n  font-family: "Poppins";\n  cursor: pointer;\n  font-size: 1em;\n  margin-left: 1em;\n}\n\n/* auth forms */\nform.signup, form.login {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 4px;\n}',
      },
    ],
  },
  {
    id: "ly2BejmM",
    title: "Logout functionality in React",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675023150833,
    folderId: "LgoHnq8u",
    updatedAt: 1676378515350,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          "\nimport { useAuthContext } from './useAuthContext'\nimport { useWorkoutsContext } from './useWorkoutsContext'\n\nexport const useLogout = () => {\n  const { dispatch } = useAuthContext()\n  const {dispatch:workoutDispatch} = useWorkoutsContext()\n\n  const logout = () => {\n    // remove user from storage\n    localStorage.removeItem('user')\n\n    // dispatch logout action\n    dispatch({ type: 'LOGOUT' })\n    workoutDispatch({ type: 'SET_WORKOUTS' , payload: null})\n  }\n\n  return { logout }\n}\n\n",
      },
    ],
  },
  {
    id: "CSUfOQqj",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675023293986,
    folderId: "",
    updatedAt: 1675023300796,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content: "",
      },
    ],
  },
  {
    id: "mijTg6Ix",
    title: "Reduce api call when typing in input ",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675368677031,
    folderId: "LgoHnq8u",
    updatedAt: 1675368745664,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          '  const [inputValue, setInputValue] = useState("")\n  const [timeoutId, setTimeoutId] = useState(null);\n\n  useEffect(() => {\n    if (timeoutId) {\n      clearTimeout(timeoutId);\n    }\n\n    setTimeoutId(\n      setTimeout(async () => {\n        setIsLoading(true)\n        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=paid-ebooks`)\n        const data = await res.json()\n        setIsLoading(false)\n        if (data.items) {\n          setGoogleBooks(data.items)\n        }\n        console.log(data.items)\n      }, 600)\n    );\n  }, [inputValue, timeoutId]);\n\n  const handleSearch = (event) => {\n    setInputValue(event.target.value);\n  }\n  \n\n',
      },
      {
        id: 1,
        title: "index.html",
        content:
          '  <input type="text" id="search" value={inputValue} onChange={(event) => handleSearch(event)} name="search" placeholder="Search For a Book" />',
      },
    ],
  },
  {
    id: "KbCoMBY2",
    title: "Error Component with Styling",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675425320571,
    folderId: "LgoHnq8u",
    updatedAt: 1675759415969,
    tabs: [
      {
        id: 0,
        title: "error.js",
        content:
          '    \n        \nimport React from \'react\';\n\nconst ErrorPage = ({ error }) => {\n    return (\n        <div className="error-container">\n              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F74%2F5c%2F42%2F745c4290e3012bd07b5ab96e2357194d--memes.jpg&f=1&nofb=1&ipt=efd2c451e869fa5f9322b99c1027ee7df8010a6315c725a1af4e7f65f1272c61&ipo=images" alt="d" width={100} />\n            <h1 className="error-message">{error.message || \'An error has occurred\'}</h1>\n            <p className="error-description">Please try again later</p>\n        </div>\n    );\n};\n\nexport default ErrorPage;',
      },
      {
        id: 1,
        title: "App.js",
        content:
          "\n// using error component\n{error && <ErrorPage error={error}}\n\n\n\n\n/* fetch-error styling */\n\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 30vw 0 23vw;\n  height: min(80vh,100vh);\n}\n\n.error-container img{\n  width: min(150px,250px);\n  height: min(150px,250px);\n  margin-bottom:20px ;\n  border-radius: 50%;\n}\n.error-message {\n  font-size: 32px;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.error-description {\n  font-size: 14px;\n  text-align: center;\n}",
      },
    ],
  },
  {
    id: "QhAFRiDc",
    title: "Fetching data using useFetch hook",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675425454377,
    folderId: "LgoHnq8u",
    updatedAt: 1675759457870,
    tabs: [
      {
        id: 0,
        title: "useFetchDataHook.js",
        content:
          "import React, { useEffect, useState } from 'react'\n\nconst useFetchData = () => {\n    const [isLoading, setIsLoading] = useState(true)\n    const [error, setError] = useState(null);\n\n    const fetchGoogleBooks = async (url) => {\n        try {\n            setIsLoading(true)\n            const res = await fetch(url)\n            if(!res.ok) throw new Error(res.statusText);            \n            let data = await res.json()\n            if(!data || !data.length) throw Error('No data returned');\n            console.log(data)\n            setError(null);\n            setIsLoading(false)\n            return data\n        } catch (err) {\n            console.log(err)\n            setIsLoading(false)\n            setError(err)\n        }\n    }\n    return { fetchGoogleBooks, isLoading, error }\n}\n\nexport default useFetchData\n",
      },
      {
        id: 1,
        title: "using Hook.js",
        content:
          "// using hook \n\nimport useFetchData from '../Hooks/useFetchData';\n\nconst { fetchGoogleBooks, isLoading, error } = useFetchData()\n\n// rememeber that fetchGoogleBooks function return a promise so you have to use .then or await keyword\n\n   useEffect(() => {\n        const fetchBooks = async ( ) => {\n            const data = await fetchGoogleBooks('/api/books')\n            console.log(data)\n            setBooks(data)\n        }\n        fetchBooks()\n        \n    }, [])\n    \n    \n    {isLoading && <Loader />}\n    \n    {!isLoading && !error && books && \"do your task with data\"}\n    \n    {error && <ErrorPage error={error}}",
      },
    ],
  },
  {
    id: "OoiQ-8gZ",
    title: "Dark Mode in React or Next JS",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675680399688,
    folderId: "LgoHnq8u",
    updatedAt: 1675681007059,
    tabs: [
      {
        id: 0,
        title: "DarkModeSwitch.js",
        content:
          '"use client"\n\nimport React, { useEffect, useState } from \'react\'\nimport { MdLightMode } from \'react-icons/md\'\nimport { BsFillMoonFill } from \'react-icons/bs\'\nimport { useTheme } from \'next-themes\'\n\nconst DarkModeSwitch = () => {\n    const { systemTheme, theme, setTheme } = useTheme()\n    const [mounted, setMounted] = useState(false)\n    useEffect(() => setMounted(true), [])\n\n    const currentTheme = theme === "system" ? systemTheme : theme\n    return (\n        <>\n            {mounted && currentTheme === "dark" ? (<MdLightMode onClick={() => setTheme("light")} />) : (<BsFillMoonFill onClick={() => setTheme("dark")} />)}\n\n        </>\n    )\n}\n\nexport default DarkModeSwitch',
      },
      {
        id: 1,
        title: "ThemeProvider.js",
        content:
          "// install next-themes using npm i next-themes\n\n\n\"use client\";\n\n\nimport React from 'react'\nimport { ThemeProvider } from 'next-themes'\nconst Providers = ({ children }) => {\n    return (\n        <ThemeProvider enableSystem={true} attribute=\"class\">\n            <div className='dark:bg-grey-700 text-gray-700 dark:text-gray-200 transition-color duration-300 min-h-screen select-none'>\n                {children}\n            </div>\n        </ThemeProvider>\n    )\n}\n\nexport default Providers",
      },
      {
        id: 2,
        title: "App.js",
        content:
          "// cover our website using Providers\n\nimport Providers from './Providers'\n\n <Providers>\n          <Header />\n          {children}\n  </Providers>",
      },
    ],
  },
  {
    id: "J8R4t2KY",
    title: "Validating Email and EmailLength,  Username",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675804155444,
    folderId: "LgoHnq8u",
    updatedAt: 1675804248567,
    tabs: [
      {
        id: 0,
        title: "validation.js",
        content:
          'const User = require("../models/user");\n\nexports.validateEmail = (email) => {\n    return String(email)\n        .toLowerCase()\n        .match(/^([a-z\\d\\.-]+)@([a-z\\d-]+)\\.([a-z]{2,12})(\\.[a-z]{2,12})?$/);\n};\n\nexports.validateLength = (text, min, max) => {\n    if (text.length > max || text.length < min) {\n        return false;\n    }\n    return true;\n};\n\nexports.validateUsername = async (username) => {\n    let a = false\n    do {\n        let check = await User.findOne({ username: username })\n        if (check) {\n            username += (+new Date()* Math.random()).toString().substring(0,2)\n            a = true\n        } else {\n            a = false\n        }\n    } while (a)\n    return username\n\n};',
      },
      {
        id: 1,
        title: "userController.js",
        content:
          "const User = require('../models/user');\n\nconst { validateEmail, validateLength, validateUsername } = require('../helpers/validation');\n\nconst bcrypt = require('bcryptjs');\n\nexports.register = async (req, res) => {\n    console.log(req.body)\n\n    try {\n        const { first_name, last_name, email, username, password, bYear, bMonth, bDay, gender } = req.body;\n\n        // validating email address\n        if (!validateEmail(email)) {\n            return res.status(400).json({ message: 'Invalid email address' });\n        }\n\n        const check = await User.findOne({ email });\n        if (check) {\n            return res.status(400).json({ message: 'User already exists' })\n        }\n        if (!validateLength(first_name, 3, 30)) {\n            return res.status(400).json({ message: 'First name must be between 3 and 30 characters' })\n        }\n\n        const cryptedPassword = await bcrypt.hash(password, 12);\n        console.log(cryptedPassword)\n\n        let tempUsername = first_name + last_name;\n        let newUsername = await validateUsername(tempUsername)\n\n        const user = await User.create({ first_name, last_name, email, username:newUsername, password: cryptedPassword, bYear, bMonth, bDay, gender })\n\n        if (user) {\n            res.status(200).send(req.body)\n        } else {\n            res.status(400).send({ message: 'User already exists' })\n        }\n    } catch (err) {\n        res.status(500).json({ message: err.message })\n\n    }\n\n}",
      },
    ],
  },
  {
    id: "Hwlmz83X",
    title: "Redux toolkit state management",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675888981594,
    folderId: "LgoHnq8u",
    updatedAt: 1675889088107,
    tabs: [
      {
        id: 0,
        title: "features/cake/cackeSlice.js",
        content:
          "const createSlice = require('@reduxjs/toolkit').createSlice\n\n//  sets the initial state of the slice\nconst initialState = {\n  numOfCakes: 20\n}\n\n// creates the slice\nconst cakeSlice = createSlice({\n  name: 'cake', // for debugging purposes\n  initialState,\n  reducers: {\n    ordered: state => {\n      state.numOfCakes--\n    },\n    restocked: (state, action) => {\n      state.numOfCakes += action.payload\n    }\n  }\n})\n\n// exports the reducer function generated by the slice. \nmodule.exports = cakeSlice.reducer\n\n//  exports the action creators generated by the slice. These are the functions that are used to dispatch actions to the store.\nmodule.exports.cakeActions = cakeSlice.actions",
      },
      {
        id: 1,
        title: "app/store.js",
        content:
          "\nconst configureStore = require('@reduxjs/toolkit').configureStore\n\n// importing the cakeReducer reducer\nconst cakeReducer = require('../features/cake/cakeSlice')\n\n// creating the Redux store\nconst store = configureStore({\n    reducer: {\n        cake: cakeReducer\n    }\n})\n\nmodule.exports = store",
      },
      {
        id: 2,
        title: "index.js",
        content:
          "const store = require('./app/store')\nconst cakeActions = require('./features/cake/cakeSlice').cakeActions\n\nconsole.log('initialState',store.getState())  // initialState { cake: { numOfCakes: 20 } }\n\nconst unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));\n\nstore.dispatch(cakeActions.ordered());   //updated state { cake: { numOfCakes: 19 } }\nstore.dispatch(cakeActions.ordered());   // updated state { cake: { numOfCakes: 18 } }\nstore.dispatch(cakeActions.ordered());   // updated state { cake: { numOfCakes: 17 } }\nstore.dispatch(cakeActions.restocked(3));   //updated state { cake: { numOfCakes: 20 } }\n\nunsubscribe()",
      },
    ],
  },
  {
    id: "IEkcdeKN",
    title: "Redux state management",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675889125772,
    folderId: "LgoHnq8u",
    updatedAt: 1675889142457,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          "const redux = require('redux');\n//  creating store\nconst createStore = redux.createStore\n\n// import combineReducers\nconst combineReducers = redux.combineReducers\n\nconst CAKE_ORDERED = 'CAKE_ORDERED';\nconst CAKE_RESTOCKED = 'CAKE_RESTOCKED';\n\nconst ICECREAM_ORDERED = 'ICECREAM_ORDERED';\nconst ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';\n\n//  action creator\nfunction orderCake() {\n    return {\n        type: CAKE_ORDERED,\n        payload: 1\n    }\n}\n\nfunction restockCake(number) {\n    return {\n        type: CAKE_RESTOCKED,\n        payload: number\n    }\n}\n\nfunction orderIcecream() {\n    return {\n        type: ICECREAM_ORDERED,\n        payload: 1\n    }\n}\n\nfunction restockIcecream(number) {\n    return {\n        type: ICECREAM_RESTOCKED,\n        payload: number\n    }\n}\n\nconst initialCakeState = {\n    numOfCakes: 10,\n}\nconst initialIcecreamState = {\n    numOfIcecreams: 10\n}\n\n// reducer function for changing state\nconst cakeReducer = (state = initialCakeState, action) => {\n    switch (action.type) {\n        case CAKE_ORDERED:\n            return {\n                ...state,\n                numOfCakes: state.numOfCakes - 1\n            }\n        case CAKE_RESTOCKED:\n            return {\n                ...state,\n                numOfCakes: state.numOfCakes + action.payload\n            }\n        default:\n            return state;\n    }\n}\n\n// reducer function for changing state\nconst icecreamReducer = (state = initialIcecreamState, action) => {\n    switch (action.type) {\n\n        case ICECREAM_ORDERED:\n            return {\n                ...state,\n                numOfIcecreams: state.numOfIcecreams - 1\n            }\n        case ICECREAM_RESTOCKED:\n            return {\n                ...state,\n                numOfIcecreams: state.numOfIcecreams + action.payload\n            }\n        default:\n            return state;\n    }\n}\n\nconst rootReducer = combineReducers({\n    cake: cakeReducer,\n    icecream: icecreamReducer\n})\n\n// createStore takes a reducer function as an argument\nconst store = createStore(rootReducer);\n\nconsole.log(\"initalState\", store.getState());  // initalState { numOfCakes: 10 }\n\n// setting a listner for the store so anytime the state changes, the subscribe function will run \nconst unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));\n\n// dispatching actions\n// passing action creator function \nstore.dispatch(orderCake());   // updated state { numOfCakes: 9, numOfIcecreams: 10 }\nstore.dispatch(orderCake());   // updated state { numOfCakes: 8, numOfIcecreams: 10 }\nstore.dispatch(orderCake());   // updated state { numOfCakes: 7, numOfIcecreams: 10 }\nstore.dispatch(restockCake(3));   //  { numOfCakes: 10, numOfIcecreams: 10 }\nstore.dispatch(orderIcecream());   // { numOfCakes: 10, numOfIcecreams: 9 }\nstore.dispatch(orderIcecream());   // { numOfCakes: 10, numOfIcecreams: 8 }\nstore.dispatch(restockIcecream(3));   // { numOfCakes: 10, numOfIcecreams: 11 }\n\nunsubscribe()\n\nstore.dispatch(orderCake());   // this will not run because the store is unsubscribed from state change",
      },
    ],
  },
  {
    id: "m-W6QvPg",
    title: "Redux Toolkit State Management React",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675922601774,
    folderId: "LgoHnq8u",
    updatedAt: 1675926244335,
    tabs: [
      {
        id: 0,
        title: "app/store.js",
        content:
          "import { configureStore } from '@reduxjs/toolkit'\nimport cakeReducer from '../features/cake/cakeSlice'\nimport icecreamReducer from '../features/icecream/icecreamSlice'\n\nconst store = configureStore({\n  reducer: {\n    cake: cakeReducer,\n    icecream: icecreamReducer,\n  }\n})\n\nexport default store",
      },
      {
        id: 1,
        title: "features/cake/cackeSlice.js",
        content:
          "import { createSlice } from '@reduxjs/toolkit'\n\nconst initialState = {\n  numOfCakes: 20\n}\n\nconst cakeSlice = createSlice({\n  name: 'cake',\n  initialState,\n  reducers: {\n    ordered: state => {\n      state.numOfCakes--\n    },\n    restocked: (state, action) => {\n      state.numOfCakes += action.payload\n    }\n  }\n})\n\nexport default cakeSlice.reducer\nexport const { ordered, restocked } = cakeSlice.actions\n",
      },
      {
        id: 2,
        title: "./features/icecream/icecreamSlice.js",
        content:
          "import { createSlice } from '@reduxjs/toolkit'\nimport { ordered as cakeOrdered } from '../cake/cakeSlice'\n\nconst initialState = {\n  numOfIcecreams: 10\n}\n\nconst icecreamSlice = createSlice({\n  name: 'icecream',\n  initialState,\n  reducers: {\n    ordered: state => {\n      state.numOfIcecreams--\n    },\n    restocked: (state, action) => {\n      state.numOfIcecreams += action.payload\n    }\n  },\n  extraReducers: builder => {\n    builder.addCase(cakeOrdered, state => {\n      state.numOfIcecreams--\n    })\n  }\n})\n\nexport default icecreamSlice.reducer\nexport const { ordered, restocked } = icecreamSlice.actions\n",
      },
      {
        id: 3,
        title: "App.js",
        content:
          "import './App.css'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { ordered, restocked } from './features/cake/cakeSlice'\nimport { ordered as orderIcream, restocked as restockIcecream} from './features/icecream/icecreamSlice'\n\nfunction App() {\n  const dispatch = useDispatch()\n\n  const store = useSelector(store => store)\n  console.log(store) // {cake: {…}, icecream: {…}}\n\n  const {cake,icecream} = store\n\n  return (\n    <div className='App'>\n      <h1>Cakes : {cake.numOfCakes}</h1>\n      <button onClick={() => dispatch(ordered())}>Order Cake</button>\n      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>\n\n      <h1>IceCream : {icecream.numOfIcecreams}</h1>\n      <button onClick={() => dispatch(orderIcream())}>Order Ice cream</button>\n      <button onClick={() => dispatch(restockIcecream(5))}>\n        Restock Ice creams\n      </button>\n    </div>\n  )\n}\n\nexport default App\n",
      },
      {
        id: 4,
        title: "main.js",
        content:
          "\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Provider } from 'react-redux'\nimport store from './app/store'\nimport './index.css'\nimport App from './App'\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById('root')\n)\n",
      },
    ],
  },
  {
    id: "68LTQ6-_",
    title: "Search Component with search ICON inside",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675937612235,
    folderId: "GT39i6Gr",
    updatedAt: 1675937728015,
    tabs: [
      {
        id: 0,
        title: "search.html",
        content:
          '// html\n    <div className="search">\n                    <SearchICON />\n                    <input\n                        type="text"\n                        placeholder="Search"\n                    />\n     </div>\n                \n                \n                ',
      },
      {
        id: 1,
        title: "search.css",
        content:
          " .search {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background: var(--bg-forth);\n    padding: 10px 32px 10px 10px;\n    border-radius: 50px;\n    cursor: text;\n  }\n  .search input {\n    outline: none;\n    border: none;\n    background: transparent;\n    font-size: 15px;\n    font-family: inherit;\n  }",
      },
    ],
  },
  {
    id: "Ng5EZdr0",
    title: "toaster notification , notification number on icon",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675938804519,
    folderId: "GT39i6Gr",
    updatedAt: 1675938860849,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          '// put this div inside main div\n<div className="middle_notification">3+</div>\n\n\n\n.middle_notification {\n    position: absolute;\n    top: 3px;\n    right: 1.9rem;\n    background: #e41e3f;\n    border-radius: 50px;\n    padding: 1px 5px;\n    font-size: 13px;\n    color: #fff;\n  }',
      },
    ],
  },
  {
    id: "Oa51CNZt",
    title: "Hide Elemement if clicked outside",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1675947129321,
    folderId: "LgoHnq8u",
    updatedAt: 1676277985269,
    tabs: [
      {
        id: 0,
        title: "index.js",
        content:
          'import { useRef, useState } from "react";\nimport useClickOutside from "../../helpers/clickOutside";\n\nexport default function Home() {\n\n  const [visible, setVisible] = useState(true);\n  \n// The useRef hook is used to create a reference to a DOM element, which is stored in the el constant. The purpose of this reference is to pass the element to the useClickOutside hook.\n\n  const el = useRef(null)\n  \n  useClickOutside(el, () => setVisible(false))\n\n  return (\n    <div >\n    // show only when visible is true\n      {visible && <div className="card" ref={el}>\n      </div>}\n    </div>\n  );\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
      },
      {
        id: 1,
        title: "useClickOutside.js",
        content:
          "import React, { useEffect } from 'react'\n\nfunction useClickOutside(ref, fun) {\n\n    useEffect((e) => {\n        const listner = (e) => {\n            // checking if clicked element is not the element itself\n            if (!ref.current || ref.current.contains(e.target)) {\n                return\n            }\n            // run the passed function \n            fun()\n        }\n        document.addEventListener('mousedown', listner)\n        document.addEventListener('touchstart', listner)\n\n// cleanup function \n        return () => {\n            document.removeEventListener('mousedown', listner)\n            document.removeEventListener('touchstart', listner)\n        }\n    }, [ref])\n\n}\n\nexport default useClickOutside",
      },
    ],
  },
  {
    id: "zz9h6wdJ",
    title: "Custom Button and common button class for every button",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676007698517,
    folderId: "GT39i6Gr",
    updatedAt: 1676007916384,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          '    <button class="btn">Click Me</button>\n\n   \n    /* every button should have these default class at starting */\n* {\n        box-sizing: border-box;\n    }\n\n    /* remember to change all pixel units to relative units like rem em */\n    .btn {\n        /* background-color: e6e6e6;  */\n        background-color: hsl(0, 0%, 90%);\n        outline: none;\n        border: 1px solid hsl(0, 0%,70%);\n        cursor: pointer; \n        padding:8px 16px;\n        border-radius:5px;\n    }\n\n    .btn:hover, .btn:focus{\n        background-color: hsl(0, 0%, 80%);\n        box-shadow: 0 0 5px 0 hsl(0, 0%,70%);\n    }\n    \n    \n    // for creating pill shaped button give insanely large border radius \n      border-radius: 200px;',
      },
    ],
  },
  {
    id: "NPIRqfpQ",
    title: "Input element, success , Error, disable , large input ,small input",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676008985597,
    folderId: "GT39i6Gr",
    updatedAt: 1676010067245,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          '    \n    \n    <input class="input" type="text" value="Default" />\n    <input class="input input-success" type="text" value="Success" />\n    <input class="input input-error" type="text" value="Error" />\n<input class="input input-large" type="text" value="Small" />\n    <input class="input input-small" type="text" value="Small" />\n    <input class="input" disabled type="text" value="Disabled" />\n    \n    \n    .input {\n        border: 1px solid#AAA ;\n        outline: none;\n        font-size: inherit;\n        padding: 8px;\n        border-radius: 3px;\n    }\n\n    .input:focus {\n        border: 1px solid #0af;\n        box-shadow: 0px 0px 4px 0px #0af;\n    }\n    \n        /* success */\n\n      .input.input-success {\n        border-color:#27AE60;\n    }\n    \n    .input.input-success:focus {\n        border-color:#0fa;\n        box-shadow: 0 0 5px 0 #0fa;\n    }\n\n\n    /* Error */\n    input.input-error{\n        border-color: #eb5757;\n    }\n    \n    input.input-error:focus{\n        border-color: #f00;\n        box-shadow: 0 0 5px #f00;\n    }\n    \n    /* large input */\n    \n        .input.input-large{\n        font-size: 20px;\n        padding: 12px;\n    }\n    \n    /* small input */\n    \n    .input.input-small{\n        font-size: 12px;\n        padding: 4px;\n    }\n    \n    \n      .input:disabled{\n        background-color: #EAEAEA;\n    }',
      },
    ],
  },
  {
    id: "PDJHVYWn",
    title: "Logo Or Icon wrapper div",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676108181573,
    folderId: "GT39i6Gr",
    updatedAt: 1676108208457,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          ' <div className="circle">\n{/* <Logo /> */}\n</div>\n\n\n .circle {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }',
      },
    ],
  },
  {
    id: "p7bsqvle",
    title: "header element CSS , Input box with search Icon ",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676108366261,
    folderId: "GT39i6Gr",
    updatedAt: 1676109705967,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content:
          '/* header */\n<header></header>\n\nheader {\n    position: fixed;\n    top: 0;\n    height: 56px;\n    z-index: 99;\n    background: var(--bg-primary);\n    width: 100%;\n    box-shadow: 1px 8px 15px -7px var(--shadow-2);\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    color: var(--color-primary);\n  }\n  \n  \n  /* search with search Icon inside */\n  \n      <div class="search">\n        <Icon width={16} height={16}\n        <input type="text" placeholder="Search Facebook" />\n    </div>\n    \n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: "Segoe UI", Helvetica, Arial, sans-serif;\n}\nhtml {\n  overflow-y: scroll;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n.search {\n    display: flex;\n    align-items: center;\n    /* height: 30px; */\n    width: 240px;\n    gap: 8px;\n    background-color: #f0f2f5;\n    padding: 10px 32px 10px 10px;\n    border-radius: 50px;\n    cursor: text;\n  }\n  .search input {\n    outline: none;\n    border: none;\n    background: transparent;\n    font-size: 15px;\n    font-family: inherit;\n  }\n  .search input::placeholder {\n    transform: translateY(-1px);\n  }',
      },
    ],
  },
  {
    id: "puircvY8",
    title: "Search Input with Search Icon",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676110913117,
    folderId: "GT39i6Gr",
    updatedAt: 1676404337653,
    tabs: [
      {
        id: 0,
        title: "Search.html",
        content:
          '\n<div class="group">\n  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">\n    <g>\n      <path\n        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"\n      ></path>\n    </g>\n  </svg>\n  <input placeholder="Search" type="search" class="input" />\n</div>\n\n\n',
      },
      {
        id: 1,
        title: "search.css",
        content:
          ".group {\n  display: flex;\n  line-height: 28px;\n  align-items: center;\n  position: relative;\n  max-width: 190px;\n}\n\n.input {\n  width: 100%;\n  height: 40px;\n  line-height: 28px;\n  padding: 0 1rem;\n  padding-left: 2.5rem;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  outline: none;\n  background-color: #f3f3f4;\n  color: #0d0c22;\n  transition: 0.3s ease;\n}\n\n.input::placeholder {\n  color: #9e9ea7;\n}\n\n.input:focus,\ninput:hover {\n  outline: none;\n  border-color: rgba(234, 76, 137, 0.4);\n  background-color: #fff;\n  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);\n}\n\n.icon {\n  position: absolute;\n  left: 1rem;\n  fill: #9e9ea7;\n  width: 1rem;\n  height: 1rem;\n}",
      },
    ],
  },
  {
    id: "IcZeY3Vd",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676237791202,
    folderId: "SwR4oUrD",
    updatedAt: 1676377970547,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content: "",
      },
      {
        id: 1,
        title: "Fragment 2",
        content: "",
      },
      {
        id: 2,
        title: "Fragment 3",
        content: "",
      },
      {
        id: 3,
        title: "Fragment 4",
        content: "",
      },
      {
        id: 4,
        title: "Fragment 5",
        content: "",
      },
      {
        id: 5,
        title: "Fragment 6",
        content: "",
      },
      {
        id: 6,
        title: "Fragment 7",
        content: "",
      },
      {
        id: 7,
        title: "Fragment 8",
        content: "",
      },
      {
        id: 8,
        title: "Fragment 9",
        content: "",
      },
      {
        id: 9,
        title: "Fragment 10",
        content: "",
      },
      {
        id: 10,
        title: "Fragment 11",
        content: "",
      },
    ],
  },
  {
    id: "OhUr9vpr",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676238271160,
    folderId: "SwR4oUrD",
    updatedAt: 1676377968378,
    tabs: [
      {
        id: 0,
        title: "Fragment 2",
        content: "",
      },
    ],
  },
  {
    id: "y7BJUQJN",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676278286154,
    folderId: "GT39i6Gr",
    updatedAt: 1676377964461,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content: "",
      },
      {
        id: 1,
        title: "Fragment 2",
        content: "",
      },
    ],
  },
  {
    id: "5Vz7HZJ2",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676401691594,
    folderId: "LgoHnq8u",
    updatedAt: 1676407457463,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content: "",
      },
    ],
  },
  {
    id: "nRRa49LJ",
    title: "Untitled snippet",
    image:
      "https://imgs.search.brave.com/Y55RkQiiqDvy7NOstg7zRr816DN4dg6WYaTqt4Zew5E/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyODAvMSpO/SHlHWUNINnZkQTlD/OGpKSENpNzVBLnBu/Zw",
    createdAt: 1676408255285,
    folderId: "LgoHnq8u",
    updatedAt: 1676408258055,
    tabs: [
      {
        id: 0,
        title: "Fragment 1",
        content: "",
      },
    ],
  },
];

export const tools = [
  {
    name: "Snippets",
    isOpen: false,
    iconName: "FaTrashAlt",
    id: "oewjoet",
    createdAt: 1675023314054,
    updatedAt: 1675023320539,
    index: 1,
  },
  {
    name: "Favorites",
    isOpen: false,
    iconName: "FaTrashAlt",
    id: "dagdq8u",
    createdAt: 1675023314054,
    updatedAt: 1675023320539,
    index: 2,
  },
  {
    name: "Deleted",
    isOpen: false,
    iconName: "FaTrashAlt",
    id: "adgajll",
    createdAt: 1675023342757,
    updatedAt: 1675023359143,
    index: 3,
  },
  {
    name: "Backup",
    isOpen: false,
    iconName: "MdOutlineDownload",
    id: "daethad",
    createdAt: 1675023342757,
    updatedAt: 1675023359143,
    index: 4,
  },
];

export const folders = [
  {
    name: "Default",
    isOpen: false,
    id: "Lhadnq8u",
    createdAt: 1675023314054,
    updatedAt: 1675023320539,
    index: 1,
  },
  {
    name: "React",
    isOpen: false,
    id: "LgoHnq8u",
    createdAt: 1675023314054,
    updatedAt: 1675023320539,
    index: 2,
  },
  {
    name: "Mongoose",
    isOpen: false,
    id: "T7aO33JL",
    createdAt: 1675023342757,
    updatedAt: 1675023359143,
    index: 3,
  },
  {
    name: "Javascript",
    isOpen: false,
    id: "SwR4oUrD",
    createdAt: 1675023365963,
    updatedAt: 1675023378575,
    index: 4,
  },
  {
    name: "Node",
    isOpen: false,
    id: "O0EvGsDA",
    createdAt: 1675023431330,
    updatedAt: 1675023436292,
    index: 5,
  },
  {
    name: "CSS",
    isOpen: false,
    id: "GT39i6Gr",
    createdAt: 1675937601678,
    updatedAt: 1675937609438,
    index: 6,
  },
];
