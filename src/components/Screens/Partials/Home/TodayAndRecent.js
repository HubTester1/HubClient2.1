/**
 * @name Partial Screen - Today and Recent
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

const TodayAndRecent = ({ partialScreenTitle }) => (
	<div>
		<PartialScreenHeader
			title={partialScreenTitle}
		/>
		<ul>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
			<li>Today and Recent partial screen</li>
		</ul>
	</div>
);

const mapStateToProps = (state) => ({
	partialScreenTitle: ReturnPartialScreenTitle(state),
});

export default connect(
	mapStateToProps,
)(TodayAndRecent);
