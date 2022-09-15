import renderer from 'react-test-renderer';
import TodoModal from '.';

it('pops when clicked', () => {
  const component = renderer.create(
    <TodoModal
      onClose={() => console.log('close')}
      actionBtnTitle={'save'}
      newTodo={true}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
