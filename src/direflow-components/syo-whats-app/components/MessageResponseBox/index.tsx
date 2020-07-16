import { connect } from 'react-redux'

import { ApplicationState } from '../../store'
import MessageResponseBox, { Props } from './MessageResponseBox'

const mapStateToProps = ({ messages: { responseMessage }, session }: ApplicationState) => ({ responseMessage, session })

export type BottomBarProps = Props;
export default connect(mapStateToProps)(MessageResponseBox)
