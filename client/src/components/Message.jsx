import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

Message.propTypes = {
  variant: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Message
