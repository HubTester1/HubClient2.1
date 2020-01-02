/**
 * @name Partial Screen - Pinned
 * @component
 * @category Partial Screens
 * @smart
 * @description Must document upon completion. Connected to Redux store.
 *
 * @todo params, types, required or optional
 * @todo document upon completion
 */

import { connect } from 'react-redux';
import { ReturnPartialScreenTitle } from '../../../../services/State/Selectors';
import PartialScreenHeader from '../Common/PartialScreenHeader';

const Pinned = ({ partialScreenTitle }) => (
	<div>
		<PartialScreenHeader
			title={partialScreenTitle}
		/>
		Pinned partial screen
	</div>
);

const mapStateToProps = (state) => ({ 
	partialScreenTitle: ReturnPartialScreenTitle(state), 
});

export default connect(
	mapStateToProps,
)(Pinned);
