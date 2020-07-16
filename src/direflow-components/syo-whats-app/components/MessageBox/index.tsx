import { connect } from 'react-redux'

import MessageBox, { Props } from './MessageBox'
import { ApplicationState } from '../../store'

const mapStateToProps = ({ messages, session }: ApplicationState) => ({ messages, session })
export type MessageBoxProps = Props;
export default connect(mapStateToProps)(MessageBox)