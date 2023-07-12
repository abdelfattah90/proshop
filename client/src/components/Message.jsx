import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

Message.propTypes = {
  variant: PropTypes.object,
  children: PropTypes.object,
}

export default Message