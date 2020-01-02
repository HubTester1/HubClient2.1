/**
 * @name Partial Screen Header
 * @component
 * @category Screens
 * @description Must document upon completion.
 *
 * @todo params, types, required or optional
 * @todo document upon completion
 */


import styled from 'styled-components';
import Style from '../../../../services/Style';

const PartialScreenTitleElement = styled.h3.attrs((props) => ({
	role: 'heading',
	'aria-level': '3',
}))`
	${Style.BlockHidden()}
`;

const PartialScreenHeader = ({ title }) => (
	<PartialScreenTitleElement>
		{title}
	</PartialScreenTitleElement>
);

export default PartialScreenHeader;
