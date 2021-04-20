import { Layout } from 'react-admin';
import MyNotification from '../notification';

const MyLayout = (props) => <Layout {...props} notification={MyNotification} />;

export default MyLayout;