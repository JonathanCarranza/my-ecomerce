import { SigninForm } from "../components/SigninForm"

export const HomePage = () => {

  return (
    <>
    <h1 className="text-center">Welcome, create new user!</h1>
    <section className="container d-flex justify-content-center">
      <SigninForm/>
    </section>
    </>
    
  )
}

