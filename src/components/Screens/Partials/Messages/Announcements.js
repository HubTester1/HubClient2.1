/**
 * @name Partial Screen - Announcements
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

const Announcements = ({ partialScreenTitle }) => (
	<div>
		<PartialScreenHeader
			title={partialScreenTitle}
		/>
		Announcements partial screen
	</div>
);

const mapStateToProps = (state) => ({
	partialScreenTitle: ReturnPartialScreenTitle(state),
});

export default connect(
	mapStateToProps,
)(Announcements);
