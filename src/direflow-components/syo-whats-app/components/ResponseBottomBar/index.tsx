import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { actions } from './ResponseBottomBar'
import { ApplicationState } from '../../store'
import ResponseBottomBar, { Props } from './ResponseBottomBar'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch)
const mapStateToProps = ({ messages: { responseMessage } }: ApplicationState) => ({ responseMessage })

export type BottomBarProps = Props;
export default connect(mapStateToProps, mapDispatchToProps)(ResponseBottomBar)