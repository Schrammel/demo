import { connect } from 'react-redux'

import MessageContainer from './MessageContainer'
import { ApplicationState } from '../../store'

const mapStateToProps = (state: ApplicationState) => ({
  messages: state.messages.data,
  websocket: state.websocket
})

export default connect(mapStateToProps)(MessageContainer)
