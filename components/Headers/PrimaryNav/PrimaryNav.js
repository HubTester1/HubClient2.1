/**
 * @name Primary Nav
 * @component
 * @category Components - Headers
 * @description Primary navigation within app. Connected to Redux store.
 * @returns {Component} &lt;PrimaryNav />
 * 
 */

import { connect } from 'react-redux';
import { ReturnScreenSize } from '../../../services/State/Selectors';
import { ReturnDarkMode } from '../../../services/State/Selectors';
import styled from 'styled-components';
import Style from '../../../services/Style';
import LinkButton from '../../Ingredients/LinkButton/LinkButton';

const Header = styled.header`
	${props => props.screenSize !== 'small' && `
		height: 100%;
		width: 6.8rem;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		overflow-x: hidden;
	`}
	${props => props.screenSize === 'small' && `
		grid-area: bottom;
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
	`}
	z-index: 999;
	background-color: ${props => (Style.Color('ux-l-1', props.darkMode))};
`;
const SiteTitleElement = styled.h1.attrs(props => ({
	role: 'heading',
	'aria-level': '1',
}))`
	${Style.BlockHidden()}
`;
const Nav = styled.nav`
	padding: 2rem;
`;
const NavList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;
const NavListItem = styled.li`
	display: block;	
	list-style: none;
	position: relative;
	margin: 0;
	font-size: ${Style.FontSize('m', 'medium')};
	font-weight: ${Style.FontWeight('light')};
`;
const PrimaryNav = ({ 
	darkMode,
	screenSize,
}) => (
	<Header
		screenSize={screenSize}
		role="banner"
		darkMode={darkMode}
	>
		<SiteTitleElement>The Hub</SiteTitleElement>
		<Nav
			role="navigation"
		>
			<NavList>
				<NavListItem>
					<LinkButton
						newS="home"
						newP="todayAndRecent"
						buttonHeight="3"
						iconPosition="before"
						iconContent="home"
						contentHeight="1.8"
						text="HOME 2"
					/>
				</NavListItem>
				<NavListItem>
					{/* <Link href="/classfieds">
						<a>Classfieds</a>
					</Link> */}
				</NavListItem>
				<NavListItem>
					{/* <Link href="/org">
						<a>Organization, Teams, & Staff</a>
					</Link> */}
				</NavListItem>
				<NavListItem>
					{/* <Link href="/around">
						<a>Around The Hub</a>
					</Link> */}
				</NavListItem>
			</NavList>
		</Nav>
	</Header>
);

const mapStateToProps = state => ({
	screenSize: ReturnScreenSize(state),
	darkMode: ReturnDarkMode(state)
});

export default connect(
	mapStateToProps,
)(PrimaryNav);
