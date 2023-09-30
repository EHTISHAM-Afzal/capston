import LogIn from "../components/LogIn"

const LoginPage = () => {
  return (
    <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
        <LogIn/>
        <button onClick={()=> localStorage.theme = 'light'}>
          light theme
        </button>
        <button onClick={()=> localStorage.theme = 'dark'}>
          dark theme
        </button>
        <button onClick={()=>localStorage.removeItem('theme')}>
          system defualt
        </button>
    </div>
  )
}

export default LoginPage