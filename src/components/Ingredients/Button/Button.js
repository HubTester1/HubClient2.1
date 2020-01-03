/**
 * @name Button
 * @component
 * @category Ingredients
 * @smart
 * @description Button.
 *
 * @todo params, types, required or optional
 */

import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReturnScreenSize } from '../../../services/State/Selectors';
import Icon from '../Icon/Icon';
import Plane from '../Plane/Plane';
import Style from '../../../services/Style';

const ReturnContentHeightInRem = (contentHeightInRem, screenSize) => (contentHeightInRem || Style.FontSize('m', screenSize).slice(0, -3));

const ReturnButtonVerticalPadding = (heightInRem, contentHeightInRem, topOrBottom) => {
	const timesTen = parseFloat(((heightInRem - contentHeightInRem) / 2).toFixed(2)) * 10;
	const rounded = topOrBottom === 'top' ? Math.ceil(timesTen) : Math.floor(timesTen);
	return rounded / 10;
};

const ReturnVisibleTextWrapperHorizontalPadding = (iconPosition) => (iconPosition === 'before' ? 'padding-left: 1rem;' : 'padding-right: 1rem;');

const ButtonBase = styled.button`
	border: 0;
	padding: 0;
	background-color: transparent;
	${({ widthInRem }) => (widthInRem && `width: ${widthInRem}rem`)};
	${({ heightInRem }) => (heightInRem && `height: ${heightInRem}rem`)};
	${({ marginInRem }) => (marginInRem && `margin: ${marginInRem}rem`)};
	cursor: pointer;
`;
const VisibleTextWrapper = styled.span`
	font-size: ${(props) => props.textSize}rem;
	font-weight: normal;
	text-align: ${(props) => props.textAlignment || 'center'};
	${(props) => ReturnVisibleTextWrapperHorizontalPadding(props.iconPosition)}
`;
const InvisibleTextWrapper = styled.span`
	${Style.InlineHidden()}
`;
const Button = ({
	screenSize,
	iconPosition,
	iconContent,
	clickHandler,
	contentHeightInRem,
	text,
	textInvisible,
	elevationLevel,
	backgroundColor,
	contentColor,
	heightInRem,
	widthInRem,
	marginInRem,
}) => (
	<ButtonBase
		onClick={clickHandler}
		heightInRem={heightInRem}
		widthInRem={widthInRem}
		marginInRem={marginInRem}
		role="button"
	>
		<Plane
			elevationLevel={elevationLevel}
			backgroundColor={backgroundColor}
			contentColor={contentColor}
			widthInRem={widthInRem}
			heightInRem={heightInRem}
			contentHeightInRem={ReturnContentHeightInRem(contentHeightInRem, screenSize)}
			paddingInRem={{
				top: ReturnButtonVerticalPadding(heightInRem, ReturnContentHeightInRem(contentHeightInRem, screenSize), 'top'),
				right: 1,
				bottom: ReturnButtonVerticalPadding(heightInRem, ReturnContentHeightInRem(contentHeightInRem, screenSize), 'bottom'),
				left: 1,
			}}
			horizontallyCenterContent
			verticallyCenterContent
			interactive
			tabindex="0"
		>
			{
				iconContent && iconPosition === 'before' 

				&& (
					<Icon
						iconPosition={iconPosition}
						iconContent={iconContent}
						contentColor={contentColor}

						contentHeightInRem={ReturnContentHeightInRem(contentHeightInRem, screenSize)}
					/>
				)
			}
			{
				!textInvisible

				&& (
					<VisibleTextWrapper
						textSize={contentHeightInRem}
						iconPosition={iconPosition}
					>
						{text}
					</VisibleTextWrapper>
				)
			}
			{
				textInvisible

				&& <InvisibleTextWrapper>{text}</InvisibleTextWrapper>
			}
			{
				iconContent && iconPosition === 'after' 

				&& (
					<Icon
						iconPosition={iconPosition}
						iconContent={iconContent}
						contentColor={contentColor}
						contentHeightInRem={ReturnContentHeightInRem(contentHeightInRem, screenSize)}
					/>
				)
			}
		</Plane>
	</ButtonBase>
);
Button.propTypes = {
	/**
	 * @smart
	 * @description Current screen size token. E.g., "small".
	 */
	screenSize: PropTypes.string,

	/**
	 * @description Icon position token. 
	 * No icon will be present if iconContent and  iconPosition are not both specified.
	 */
	iconPosition: PropTypes.oneOf(['before', 'after']),

	/**
	 * @description Icon content token.
	 * No icon will be present if iconContent and  iconPosition are not both specified.
	 */
	iconContent: PropTypes.oneOf(['Home', 'Messages', 'OnTheHub', 'People', 'SearchToRight', 'SearchToLeft']),

	/**
	 * @description Text content of button. E.g., "Button Text".
	 */
	text: PropTypes.string.isRequired,

	/**
	 * @description Margin size, measured in rem, to be applied to all sides of button. E.g., "2".
	 */
	marginInRem: PropTypes.string,

	/**
	 * @description Width of button, measured in rem. E.g., "15".
	 */
	widthInRem: PropTypes.string.isRequired,

	/**
	 * @description Height of button, measured in rem. E.g., "5".
	 */
	heightInRem: PropTypes.string.isRequired,

	/**
	 * @description Color of text and/or icon. Style service param. E.g., "primary-green".
	 */
	contentColor: PropTypes.string,

	/**
	 * @description Color of background. Style service param. 
	 * Reminder: may be transparent. E.g., "bold-pink".
	 */
	backgroundColor: PropTypes.string,

	/**
	 * @description Elevation level. Style service param. E.g., "4".
	 */
	elevationLevel: PropTypes.string,

	/**
	 * @description Height of button's text and/or icon, measured in rem. E.g., "3".
	 * @default Style.FontSize('m', screenSize).slice(0, -3)
	 */
	contentHeightInRem: PropTypes.string,

	/**
	 * @description Indicates that text should be hidden from sight 
	 * (but will remain available to assistive technologies). E.g., true.
	 */
	textInvisible: PropTypes.bool,

	/**
	 * @description Function executed when button is clicked. E.g., () => handleClick(...params).
	 */
	clickHandler: PropTypes.string,

};
const mapStateToProps = (state) => ({
	screenSize: ReturnScreenSize(state),
});
export default connect(
	mapStateToProps,
)(Button);
