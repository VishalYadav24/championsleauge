import { Dashboard } from '@mui/icons-material';
import renderer from 'react-test-renderer';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });