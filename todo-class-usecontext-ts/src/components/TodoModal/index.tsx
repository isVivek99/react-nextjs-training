import React from 'react';
import { TodoContext, actions } from '../../store';
import './styles.scss';

interface TodoModalProps {
  onClose: () => unknown;
  actionBtnTitle: string;
  todo?: any;
  newTodo: boolean;
  index?: number;
}

interface Errors {
  titleError: string;
  descriptionError: string;
}
interface TodoModalState {
  title: string;
  description: string;
  errors: Errors;
}

export default class TodoModal extends React.Component<
  TodoModalProps,
  TodoModalState
> {
  state: TodoModalState = {
    title: '',
    description: '',
    errors: {
      titleError: '',
      descriptionError: '',
    },
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    // form validation
    if (
      this.state.title.trim() === '' &&
      this.state.description.trim() === ''
    ) {
      this.setState({
        errors: {
          titleError: 'Title is required',
          descriptionError: 'Description is required',
        },
      });
    } else if (this.state.title.trim() === '') {
      this.setState({ description: '', title: 'Title is required' });
    } else if (this.state.description.trim() === '') {
      this.setState({ description: 'Description is required', title: '' });
    } else {
      if (this.props.newTodo) {
        this.context.addTodo({
          title: this.state.title,
          description: this.state.description,
        });
        this.props.onClose();
      } else {
        this.props.onClose();
      }
    }
  };

  // useEffect(() => {
  //   setTitle(todo ? todo.title : '');
  //   setDescription(todo ? todo.description : '');
  // }, [todo]);
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;
  render() {
    return (
      <div className='modal-overlay modal-overlay-active'>
        <div className='todomodal padding-default mx-auto'>
          <div className='todomodal_inputs'>
            <div className=' my-1'>
              <input
                type='text'
                name='title'
                className='todomodal_input'
                placeholder='Add a title'
                value={this.state.title}
                onChange={(e: any) => {
                  this.setState({ title: e.target.value });
                }}
              />
            </div>
            {this.state.errors.titleError && (
              <p className='form-error-text'>{this.state.errors.titleError}</p>
            )}
            <div className='my-1'>
              <textarea
                className='todomodal_input'
                placeholder='Add a description'
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </div>
            {this.state.errors.descriptionError && (
              <p className='form-error-text'>
                {this.state.errors.descriptionError}
              </p>
            )}
            <div>
              <div className='d-flex justify-content-between my-2'>
                <div
                  className='btn toastmodal_btn'
                  onClick={() => this.props.onClose()}
                >
                  <p>cancel</p>
                </div>
                <div className='btn toastmodal_btn' onClick={this.handleSubmit}>
                  <p className='toastmodal_btn_text' data-testid='todoModal'>
                    {this.props.actionBtnTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TodoModal.contextType = TodoContext;
