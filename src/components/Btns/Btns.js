import "./Btns.css"

const PrimaryBtns = (props) => {
  return (
    <div className="button primary-btn">
        <a href="#">{props.children}</a>
    </div>
  )
}


const SecondarBtns = (props) => {
    return (
      <div className="button secondary-btn">
        <a href="#">{props.children}</a>
      </div>
    )
  }
  

  const ThtoisiemeBtns = (props) => {
    return (
      <div className="button thtoisieme-btn">
        <a href="#">{props.children}</a>
      </div>
    )
  }

export default PrimaryBtns
export {SecondarBtns}
export {ThtoisiemeBtns}