
const Searchbar = (props) => {
  const onchangeHandler = (e) => {
  
    console.log(e.target.value)
    props.fetchData(e.target.value)
  }

  return (
      <div>
          <h1 className="heading">Search Here</h1>
      <input className="input" type="text" onChange={onchangeHandler} />
      </div>
  )
}



export default Searchbar