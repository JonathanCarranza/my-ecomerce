import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {emailValidation, maxPassword, minPassword} from '../utils/validators'
import {app} from '../firebase'


export const SigninForm = () => {

    const {register,handleSubmit,formState: {errors}} = useForm()
    const auth = getAuth(app)

  const createUser = async (data) =>{
    try {
        const userCredential = await createUserWithEmailAndPassword (auth,data.email,data.password)
        console.log(userCredential)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
        <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title text-center">Create New User</h5>

        <form onSubmit={handleSubmit(createUser)}>


          <div className="mb-3">
            <input 
              type="text" 
              name="email"
              {...register('email',{required:'EMAIL IS REQUIRED', pattern:emailValidation})}
              className="form-control" 
              placeholder="Please, whirte your E-Mail"
              />
              {
                errors.email && <span className='text-danger'>{errors.email.message}</span>
              }
          </div>

          <div className="mb-3">
            <input type="password" 
            name="password"
            {...register('password',{required:'PASSWORD IS REQUIRED', minLength: minPassword, maxLength: maxPassword})}
            className="form-control" 
            placeholder="Please, whirte your Password"/>
            {
              errors.password && <span className='text-danger'>{errors.password.message}</span>
            }
          </div>

          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-secondary">
              Crear Cuenta
            </button>
          </div>

        </form>

      </div>
    </div>
    </>
  )
}

