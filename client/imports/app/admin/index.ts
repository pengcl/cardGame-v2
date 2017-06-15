import {AdminComponent} from './admin.component';
import {ADMIN_COMPONENTS_DECLARATIONS} from './components';
import {ADMIN_PAGES_DECLARATIONS} from './pages';
import {ADMIN_PIPES_DECLARATIONS} from './pipes';

export const ADMIN_DECLARATIONS = [
    AdminComponent,
    ...ADMIN_COMPONENTS_DECLARATIONS,
    ...ADMIN_PAGES_DECLARATIONS,
    ...ADMIN_PIPES_DECLARATIONS
];