import {useDispatch} from 'react-redux'
import {LOGIN} from './reducer/Action'
export const Login=()=>{
  const dispatch=useDispatch()
  return(<>
  <div className='container'>

    <div className="d-flex justify-content-center mt-5">
      <button type="button" className="btn btn-primary gx-3" onClick={()=>{dispatch(LOGIN())
      }}>
        LOGIN
      </button>
      <p></p>
    </div>
  </div>
  </>)
}