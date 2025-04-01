import Alert from "react-bootstrap/Alert"

const Welcome = function () {
  return (
    <Alert variant="success" className="text-center">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>Welcome to your next FAVORITE BOOKSHOP</p>
      <hr />
      <p className="mb-0">Get lost in the pages</p>
    </Alert>
  )
}

export default Welcome
