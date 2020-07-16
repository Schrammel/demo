import ImageModal from './ImageModal'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'

const mapStateToProps = ({ dom: { root } }: ApplicationState) => {
  return { root }
}
export default connect(mapStateToProps)(ImageModal)