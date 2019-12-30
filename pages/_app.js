/**
 * @name App
 * @component
 * @category Next.js Overrides
 * @description Connect Next.js to Redux.
 * 
 * Create state store. Get data from index page component and send to state store via reducers.
 * 
 * Used by Next.js in transpilation; overrides default Next.js _app.
 */

import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../services/State/MakeStore';

class AppWithRedux extends App {
	// get Index's props and, optionally, dispatch here
	static async getInitialProps({ Component, ctx }) {
		// get props passed from Index (Component)
		await Component.getInitialProps(ctx)
			.then((indexProps) => {
				if (!indexProps.stateError) {					
					ctx.store.dispatch({
						type: 'SET_SCREEN_DATA',
						sData: indexProps.sData,
					});
					ctx.store.dispatch({
						type: 'SET_USER_DATA',
						uData: indexProps.uData,
					});
				} else {
					ctx.store.dispatch({
						type: 'SET_STATE_ERROR',
						error: indexProps.stateError,
					});
				}
				return { indexProps };
			})
			.catch((error) => {
				ctx.store.dispatch({
					type: 'SET_STATE_ERROR',
					error,
				});
			});
	}
	// return Index with access to store state (and its own props)
	render() {
		const { Component, indexProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...indexProps} />
			</Provider>
		);
	}
}

export default withRedux(makeStore)(AppWithRedux);
