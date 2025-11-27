import { addHours } from 'date-fns';
import useCalendarStore from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore'
import './modal.css'



const FabAddNew = () => {

    const { openDateModal} = useUiStore();

    const {setActiveEvent} = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
             title: ' ',
             notes: ' ',
             start: new Date(),
             end: addHours(new Date(), 2),
             bgColor: '#fafafa',
             user: {
               _id: '123',
               name: 'Zineb' 
        }
    });
        openDateModal();

    }


  return (
    <div>
      <button 
      onClick={ handleClickNew }
      className='btn btn-primary fab'>
        <i className='fas fa-plus'></i>

      </button>
    </div>
  )
}

export default FabAddNew
