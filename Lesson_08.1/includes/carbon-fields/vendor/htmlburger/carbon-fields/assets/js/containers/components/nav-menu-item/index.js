/**
 * The external dependencies.
 */
import { compose, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Container from 'containers/components/container';
import withStore from 'containers/decorators/with-store';
import withSetup from 'containers/decorators/with-setup';
import { TYPE_NAV_MENU_ITEM } from 'containers/constants';

export default compose(
	setStatic('type', TYPE_NAV_MENU_ITEM),
	withStore(),
	withSetup()
)(Container);
