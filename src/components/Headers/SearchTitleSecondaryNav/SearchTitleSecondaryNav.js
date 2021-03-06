
// Primary purpose: search and h1 and partial screen tabs (secondary nav) header
/**
 * @name Search - Title - Secondary Nav
 * @component
 * @smart
 * @category Headers
 * @description Search box, screen title, partial screen tabs (secondary navigation).
 *
 */

import { connect } from 'react-redux';
import Sticky from 'react-sticky-el';
import styled from 'styled-components';
import {
	ReturnHeaderIsStuck, ReturnScreenTitle, ReturnPartialScreenTabsSpecs, ReturnDarkMode, 
} from '../../../services/State/Selectors';


import Style from '../../../services/Style';

const Wrapper = styled.div`
	background-color: ${(props) => (Style.Color('ux-l-1', props.darkMode))};
`;
const Header = styled.header`
	height: 5rem;
	z-index: 999;
`;
const Tab = styled.p`
	${({ selected }) => selected && `
		border-bottom: ${(props) => (Style.Color('ux-l-1', props.darkMode))};
	`}
`;
const ScreenTitleElement = styled.h2.attrs((props) => ({
	role: 'heading',
	'aria-level': '2',
}))``;
const SearchTitleSecondaryNav = ({
	headerStuck,
	screenTitle,
	partialScreenTabsSpecs,
	darkMode,
	handleFixedHeaderToggle,
}) => (
	<Sticky
		onFixedToggle={(free) => handleFixedHeaderToggle(free)}
		wrapperCmp="div"
	>
		<Wrapper
			darkMode={darkMode}
		>
			<Header
				stuck={headerStuck}
			>
				<input type="text" />

				{
					headerStuck

					&& <p>This is stuck.</p>
				}
				{
					!headerStuck

					&& <p>This is NOT stuck.</p>
				}
			</Header>
			<ScreenTitleElement>{screenTitle}</ScreenTitleElement>
			<nav role="navigation">
				{
					partialScreenTabsSpecs.map((tabSpecValue) => (
						<Tab
							selected={tabSpecValue.selected}
							key={tabSpecValue.key}
							darkMode={darkMode}
						>
							{tabSpecValue.title}
						</Tab>
					))
				}
			</nav>
		</Wrapper>
	</Sticky>
);

const mapStateToProps = (state) => ({
	headerStuck: ReturnHeaderIsStuck(state),
	screenTitle: ReturnScreenTitle(state),
	partialScreenTabsSpecs: ReturnPartialScreenTabsSpecs(state),
	darkMode: ReturnDarkMode(state),
});
const mapDispatchToProps = (dispatch) => ({ // ownProps
	handleFixedHeaderToggle: (free) => {
		dispatch({
			type: 'SET_HEADER_STUCK',
			headerStuck: !free,
		});
	},
});
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SearchTitleSecondaryNav);
