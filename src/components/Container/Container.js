import "./Container.css"

 const Container = (props) => {
  return (
    <div className="container main-constainer">
      {props.children}
      </div>
  )
}
export default Container
