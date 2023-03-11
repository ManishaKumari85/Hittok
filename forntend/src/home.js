
import { useNavigate } from 'react-router-dom'
 export default function Home(){ 
    const navigate = useNavigate()

    let logout = () => {
        localStorage.clear()
        navigate('/login')
      }
return (

<>
<h1>Home</h1>
<button className='btn' type='button' onClick={logout} >logout</button>




</>




)


}
