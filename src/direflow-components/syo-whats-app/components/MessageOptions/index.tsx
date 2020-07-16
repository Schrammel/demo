import MessageOptions, { Props } from './MessageOptions'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { actions } from './MessageOptions'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch)
export default connect(null, mapDispatchToProps)(MessageOptions)
export type MessageOptionsProps = Props;
