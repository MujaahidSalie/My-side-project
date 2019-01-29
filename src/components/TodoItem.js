import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    /*  This is the longer way
           getStyle = () => {
           if (this.props.todo.completed)
         {
             return{
                 textDecoration: 'Line-Through'
             }
         }else
         {
             return{
                 textDecoration: 'none'
             }
         }
     }; */

 //This is a much quicker way by using just one return
    getStyle = () => {
       return {
           // "?" meaning - checks if it is true!
           // ":" meaning - semicolon represent else
           background:'#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'Line-through' : 'none'
       }
    };
    //You may use the bind source to show the props "bind(this)}" markComplete
    //but here is a better way by using example below
    //markComplete = (e) => {
    //         console.log(this.props)
    //     };
    render() {
        const { id, title} = this.props.todo;
        return (
            <div
                style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    { title }
                    <button
                        onClick={this.props.delTodo.bind(this, id)} style={btnStyle
                    }>x</button>
                </p>
            </div>
        );
    }
}
//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};
const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};
export default TodoItem;
