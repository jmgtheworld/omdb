

export default function Button (props) {

  const {state, setState}  = props;

  const toggle = (state) => {
    if (state) {
      this.setState(false)
    } 
    this.setState(true)
  }

  return (
    <button 
      className = "nominateButton" 
      disabled = {state}
      onClick = {toggle}
    > 
    Nominate 
    </button>
  )
}

