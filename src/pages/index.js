/* eslint-disable  react/react-in-jsx-scope */
/**
 * @name Index
 * @component
 * @category Next.js
 * @smart
 * @description Fetch data and send it to _app. Render Container component.
 * 
 * Used by Next.js whenever /index is requested.
 * @param {string} [s] - URL param indicating which screen is requested.
 * @param {string} [p] - URL param indicating which partial screen is requested.
 * @param {string} [u] - URL param indicating current user's account name. 
 * E.g., "sp1". SPO sets correct current user, even if the wrong user was entered.
 * @param {string} [o] - URL param indicating an account name that should be used 
 * instead of the current user's account name. If the current user does not have 
 * permission to emulate another user, this param will be ignored.
 */

import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Layout/Container';
import User from '../services/User';
import Screen from '../services/Screen';

class Index extends Component {
	// add props to component and dispatch data to store; called on both 
	// 		server side and client side, but with different args. 
	// 		In both cases, args include normalized pathname and query.
	static async getInitialProps({
		store, isServer, pathname, query, 
	}) {
		const {
			s, o, u, p, 
		} = query;

		try {
			const uDataResponse = await User.ReturnUData(u, o);
			const uData = await uDataResponse.uData;
			const sData = Screen.ReturnSData(s, p);
			return {
				uData, sData,
			};
		} catch (error) {
			return {
				stateError: error, 
			};
		}
	}

	render() {
		return (
			<Container />
		);
	}
}

export default connect((state) => state)(Index);
