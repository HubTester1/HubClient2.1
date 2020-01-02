/**
 * @name Partial Screen - Classifieds
 * @component
 * @category Partial Screens
 * @smart
 * @description Must document upon completion.
 *
 * @todo document upon completion
 */

import { connect } from 'react-redux';
import { ReturnPartialScreenTitle } from '../../../../services/State/Selectors';
import PartialScreenHeader from '../Common/PartialScreenHeader';

const Classifieds = ({ partialScreenTitle }) => (
	<div>
		<PartialScreenHeader
			title={partialScreenTitle}
		/>
		Classifieds partial screen
	</div>
);

const mapStateToProps = (state) => ({
	partialScreenTitle: ReturnPartialScreenTitle(state),
});

export default connect(
	mapStateToProps,
)(Classifieds);
