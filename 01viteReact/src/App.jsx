
function App() {
  const headingStyle =  {
    color: 'white'
  }
  const evaluatedValue = "hello"
  return (
    <>
      <h1 style={headingStyle}>{evaluatedValue? "hi":"hello" } Hi this is a react app bundled with vite!!</h1>
    </>
  )
}

export default App
