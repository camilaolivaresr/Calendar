import './modal.css'
import useCalendarStore from '../../hooks/useCalendarStore';

const FabDelete = () => {


    const {startDeletingEvent, hasEventSelected} = useCalendarStore();

    const handleDelete = () => {
      startDeletingEvent();

    }


  return (
       <div>
      <button 
      onClick={ handleDelete}
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
      className='btn btn-danger fab-delete'>
        <i className='fas fa-trash-alt'></i>

      </button>
    </div>
  )
}

export default FabDelete
