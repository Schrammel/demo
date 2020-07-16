import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import BottomBar, { Props } from './BottomBar'
import { ApplicationState } from '../../store'
import { actions } from './BottomBar'
export * from './BlockBottomBar'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch)
const mapStateToProps = ({ session }: ApplicationState) => ({ session })
export type BottomBarProps = Props;
export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)