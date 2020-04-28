import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Notes = ({notes, onRemove}) => 
     (
        <TransitionGroup className="list-group" component="ul">
           {notes.map(note => (
               <CSSTransition key={note.id} classNames={'note'} timeout={800}>
                    <li className="list-group-item note" >
                        <div className="notes-data">
                                <strong>{note.title}</strong>
                                <small className="badge badge-info">{note.date}</small>
                        </div>
                        <button type="button" className="btn btn-danger btn-sm" 
                        onClick={() => onRemove(note.id)}>&times;</button>
                    </li>
               </CSSTransition>
           ))}
            
        </TransitionGroup>
    )


export default Notes;